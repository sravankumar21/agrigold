import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import comingSoonImage from '../images/coming soon.avif';

const ComingSoon = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <Container
            fluid
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#ffffff',
                textAlign: 'center',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* Coming Soon Image */}
                <img
                    src={comingSoonImage}
                    alt="Coming Soon"
                    style={{
                        maxWidth: '100%',
                        width: '300px', // Set a specific width for responsive centering
                        marginBottom: '30px',
                    }}
                />

                {/* Text Content */}
                <p style={{ fontSize: '2rem', color: '#0c2d1c', marginBottom: '20px' }}>
                    We're working hard to bring you something special. Stay tuned!
                </p>

                {/* Go to Home Button */}
                <Button
                    onClick={goToHome}
                    style={{
                        backgroundColor: '#007f5c',
                        borderColor: '#007f5c',
                        padding: '10px 20px',
                        fontSize: '1rem',
                    }}
                >
                    Go to Home
                </Button>
            </div>
        </Container>
    );
};

export default ComingSoon;
