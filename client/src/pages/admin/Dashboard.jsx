import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
    const [profileOpen, setProfileOpen] = useState(false)

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {/* SIDEBAR */}
            <div style={{
                width: '240px', height: '100vh', position: 'fixed',
                left: 0, top: 0, zIndex: 100,
                background: 'linear-gradient(160deg, #ffc107 0%, #ffca2c 60%, #ffd54f 100%)',
                boxShadow: '4px 0 20px rgba(255,193,7,0.3)',
                display: 'flex', flexDirection: 'column'
            }}>
                {/* Brand */}
                <div style={{ padding: '22px 20px 18px', borderBottom: '1px solid rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: 36, height: 36, background: 'rgba(0,0,0,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <i className="bi bi-lightning-charge-fill" style={{ color: '#fff', fontSize: 18 }}></i>
                    </div>
                    <div>
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 17, fontWeight: 700, color: '#1a1a2e' }}>
                            Electronic Hub
                        </div>
                        <small style={{ fontSize: 11, color: 'rgba(0,0,0,0.45)' }}>Admin Panel</small>
                    </div>
                </div>

                {/* Label */}
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(0,0,0,0.45)', padding: '18px 20px 6px' }}>
                    Main Menu
                </div>

                {/* Nav */}
                <nav style={{ flex: 1, padding: '4px 12px' }}>
                    {[
                        { to: '', icon: 'bi-speedometer2', label: 'Dashboard' },
                        { to: 'category', icon: 'bi-tags-fill', label: 'Category Management' },
                        { to: 'orders', icon: 'bi-cart-fill', label: 'Order Management' },
                        { to: 'product', icon: 'bi-box-seam', label: 'Product Management' },
                        { to: 'users', icon: 'bi-people-fill', label: 'Users Management' },
                        { to: 'complaint', icon: 'bi-chat-dots-fill', label: 'Complaint Management' },
                        { to: 'inventory', icon: 'bi-archive-fill', label: 'Inventory Management' },
                    ].map(item => (
                        <Link key={item.to} to={item.to} style={{
                            display: 'flex', alignItems: 'center', gap: 11,
                            padding: '10px 12px', borderRadius: 10,
                            color: '#1a1a2e', textDecoration: 'none',
                            fontSize: 13.5, fontWeight: 500, marginBottom: 2,
                        }}>
                            <i className={`bi ${item.icon}`} style={{ fontSize: 16, width: 20, textAlign: 'center' }}></i>
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div style={{ padding: '14px 20px', borderTop: '1px solid rgba(0,0,0,0.1)', fontSize: 11, color: 'rgba(0,0,0,0.4)', textAlign: 'center' }}>
                    © 2025 Electronic Hub
                </div>
            </div>

            {/* TOPBAR */}
            <div style={{
                position: 'fixed', top: 0, left: 240, right: 0, height: 60,
                background: 'linear-gradient(90deg, #1565c0, #1976d2 50%, #1e88e5)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 28px', boxShadow: '0 2px 12px rgba(21,101,192,0.35)', zIndex: 99
            }}>
                {/* Welcome Text */}
                <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>
                    ⚡ Welcome to Electronic Hub
                </div>

                {/* Right Icons + Profile */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {/* Bell */}
                    <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.12)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.2)' }}>
                        <i className="bi bi-bell-fill" style={{ color: '#fff', fontSize: 16 }}></i>
                    </div>

                    {/* Profile Dropdown */}
                    <div style={{ position: 'relative' }}>
                        <div onClick={() => setProfileOpen(!profileOpen)} style={{
                            display: 'flex', alignItems: 'center', gap: 9,
                            background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)',
                            borderRadius: 50, padding: '5px 14px 5px 6px', cursor: 'pointer'
                        }}>
                            <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, #ffc107, #ff8f00)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 14 }}>A</div>
                            <div>
                                <div style={{ fontSize: 13, color: '#fff', fontWeight: 500 }}>Admin</div>
                                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.6)' }}>Super Admin</div>
                            </div>
                            <i className="bi bi-chevron-down" style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}></i>
                        </div>

                        {profileOpen && (
                            <div style={{ position: 'absolute', top: 50, right: 0, background: '#fff', borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.15)', minWidth: 160, overflow: 'hidden', zIndex: 999 }}>
                                <Link to="#" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 16px', fontSize: 13, color: '#333', textDecoration: 'none' }}>
                                    <i className="bi bi-key"></i> Change Password
                                </Link>
                                <Link to="#" style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '10px 16px', fontSize: 13, color: '#e53935', textDecoration: 'none' }}>
                                    <i className="bi bi-box-arrow-right"></i> Logout
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ marginLeft: 240, marginTop: 60, minHeight: 'calc(100vh - 60px)', padding: 28, background: '#f0f4f8' }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard