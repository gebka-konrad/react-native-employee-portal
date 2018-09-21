import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
  return (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene component={LoginForm} key="login" title="Please login" initial />
            </Scene>
            <Scene key="main" initial>
                <Scene 
                    initial
                    rightTitle="Add" 
                    onRight={() => Actions.employeeCreate()} 
                    component={EmployeeList} 
                    key="employeeList" 
                    title="Employees" 
                />
                <Scene 
                    component={EmployeeCreate} 
                    key="employeeCreate" 
                    title="Create Employee" 
                />
            </Scene>
        </Scene>
    </Router>
  );
};

export default RouterComponent;
