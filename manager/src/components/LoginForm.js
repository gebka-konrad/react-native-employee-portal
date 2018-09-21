import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return (<View style={styles.errorContainer}>
                        <Text style={styles.errorTextStyle}>
                            {this.props.error}
                        </Text>
                    </View>);
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />;
        }

         return (<Button onPress={this.onButtonPress.bind(this)}>
                        Log in
                    </Button>);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={this.props.email}
                        placeholder="user@gmail.com"
                        label="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secure
                        placeholder="password"
                        label="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                    />
                </CardSection>
                
                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                    
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    errorContainer: {
        backgroundColor: 'white',
    }
};

const mapStateToProps = state => {
    const { email, password, user, error, loading } = state.auth;

    return {
        email,
        password,
        user,
        error,
        loading,
    };
};

export default connect(mapStateToProps, 
    { emailChanged, passwordChanged, loginUser 
    })(LoginForm);
