import React, { Component } from 'react';

import TwitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
    state = {
        userName: ''
    };

    handleInputChange = (e) => {
        this.setState({ userName: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { userName } = this.state;

        if (!userName.length) return;

        localStorage.setItem('@GoTwitter:username', userName);
        this.props.history.push('/timeline');
    }
    
    render() {
        return (
            <div className="login-wrapper">
                <img src={TwitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit} >
                    <input value={this.state.userName} onChange={this.handleInputChange} placeholder="Nome de usuário" />
                    <button type="submit">Entrar</button>
                </form>


            </div>
        );
    }
}