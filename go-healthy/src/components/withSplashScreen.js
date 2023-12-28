import React, { Component } from 'react';
import logo from '../Login (1).png';
import '../splash.css'; // Mengimpor file CSS yang digunakan

// Gaya untuk elemen splash
const splashStyle = {
    width: '100%', // Maksimum lebar sesuai dengan lebar layar
    height: 'auto', // Mengikuti proporsi asli gambar
    maxWidth: '100%'
};

// Gaya untuk elemen gambar
const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

// Fungsi yang mengembalikan elemen splash
function SplashMessage() {
    return (
        <div style={splashStyle}>
            <img src={logo} alt="logo" style={imgStyle} />
        </div>
    );
}

// Komponen dengan splash screen
export default function withSplashScreen(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
            };
        }

        async componentDidMount() {
            try {
                // Tempatkan permintaan await/permintaan API Anda di sini
                // Di sini, kita menggunakan setTimeout untuk mensimulasikan loading.
                setTimeout(() => {
                    this.setState({
                        loading: false,
                    });
                }, 1000)
            } catch (err) {
                console.log(err);
                this.setState({
                    loading: false,
                });
            }
        }

        render() {
            // Saat memeriksa sesi pengguna, tampilkan pesan "loading"
            if (this.state.loading) return SplashMessage();

            // Jika tidak lagi dalam status loading, tampilkan rute yang diinginkan
            return <WrappedComponent {...this.props} />;
        }
    };
}
