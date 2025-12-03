import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import "./followers.css";
import tktok from './img/logo-tiktok.png';

const TIKTOK_API = process.env.REACT_APP_TIKTOK_API;
const LOGIN_API = process.env.REACT_APP_LOGIN_API;

const FOLLOWER_GOAL = 1000;

const FOLLOWER_MESSAGES = [
    "🎉 Bienvenido a la comunidad!",
    "💖 Gracias por seguirme!",
    "🥰 Esta es la mejor comunidad <3",
    "🙌 Un abrazo enorme por seguir!",
    "✨ Eres increíble, gracias por seguir!"
];

const NEAR_GOAL_MESSAGES = [
    "🚀 ¡Casi llegamos a la meta!",
    "🔥 Solo faltan unos pocos seguidores!",
    "✨ ¡La magia está por suceder!"
];

const fetchStats = async () => {
    if (!TIKTOK_API) throw new Error("TIKTOK_API no está definido. Verifica variables de entorno.");
    if (!LOGIN_API) throw new Error("LOGIN_API no está definido. Verifica variables de entorno.");


    try {
        const res = await axios.get(TIKTOK_API, { withCredentials: false });

        return res.data;
    } catch (err) {
        if (err.response?.status === 401) {
            // Reintentar login
            await axios.get(LOGIN_API, { withCredentials: false });
            await new Promise(r => setTimeout(r, 2000));
            const retryRes = await axios.get(TIKTOK_API, { withCredentials: false });
            return retryRes.data;
        } else {
            throw err;
        }
    }
};

const FollowersBars = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["tiktokStats"],
        queryFn: fetchStats,
        refetchInterval: 2000,
        retry: 2,
    });

    const [animatedFollowers, setAnimatedFollowers] = useState(0);
    const [floatingMessage, setFloatingMessage] = useState(null);
    const [goalReached, setGoalReached] = useState(false);

    useEffect(() => {
        if (!data) return;

        const start = animatedFollowers ?? 0;
        const end = data.follower_count ?? 0;
        const duration = 800;
        const increment = (end - start) / (duration / 16);
        let current = start;

        const animate = () => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                setAnimatedFollowers(end);

                // Mensajes flotantes
                if (end > start) {
                    let message = FOLLOWER_MESSAGES[Math.floor(Math.random() * FOLLOWER_MESSAGES.length)];
                    if (end / FOLLOWER_GOAL > 0.8 && !goalReached) {
                        message = NEAR_GOAL_MESSAGES[Math.floor(Math.random() * NEAR_GOAL_MESSAGES.length)];
                    }
                    setFloatingMessage(message);
                    setTimeout(() => setFloatingMessage(null), 3000);
                }

                if (end >= FOLLOWER_GOAL && !goalReached) {
                    setGoalReached(true);
                    setFloatingMessage("🎁 ¡Meta alcanzada! Algo increíble te espera... 😏✨");
                    setTimeout(() => setFloatingMessage(null), 5000);
                }

            } else {
                setAnimatedFollowers(current);
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [data]);

    if (isLoading)
        return (
            <div className="container">
                <div className="spinner"></div>
                <p>Cargando perfil...</p>
            </div>
        );

    if (error)
        return (
            <div className="container">
                <div className="spinner"></div>
                <p>Actualizando...</p>
            </div>
        );

    const followerPercent = Math.min((animatedFollowers / FOLLOWER_GOAL) * 100, 100);

    return (
        <div className="container">
            <div className="profile-card">

                {followerPercent >= 80 && !goalReached && (
                    <div className="reward-badge">🏆 ¡Meta casi alcanzada!</div>
                )}

                <img src={data.avatar_url ?? tktok} alt="Avatar" className="avatar" />
                <h2>{data.display_name ?? "Display Name Was Not Found"}</h2>
                <p>@{data.username ?? "Name Was Not Found"}</p>

                <div className="stats">
                    <div className="stat">
                        <strong>{Math.round(animatedFollowers)}</strong>
                        <span>Seguidores</span>
                    </div>
                    <div className="stat">
                        <strong>{data.likes_count ?? 0}</strong>
                        <span>Likes</span>
                    </div>
                </div>

                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${followerPercent}%` }} />
                </div>
                <p>Meta: {Math.round(animatedFollowers)} / {FOLLOWER_GOAL} seguidores</p>

                {floatingMessage && <div className="floating-message">{floatingMessage}</div>}
            </div>

            <a href="https://www.tiktok.com/@ansonyrojas31" target="_blank" rel="noreferrer">
                <div className="tiktok-footer">
                    <img src={tktok} alt="TikTok" className="tiktok-icon" />
                    <span>Sígueme para que veas la magia ✨</span>
                </div>
            </a>

            {goalReached && (
                <div className="goal-reward">
                    🎁 Has desbloqueado el contenido secreto! Haz clic para descubrirlo ✨
                </div>
            )}
        </div>
    );
};

export default FollowersBars;
