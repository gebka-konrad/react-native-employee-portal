import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate, employeeCreate } from '../actions';

class EmployeeCreate extends Component {

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

  render() {
    return (
      <Card>
        <CardSection>
            <Input 
                label="Name"
                placeholder="Jane"
                value={this.props.name}
                onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
            />
        </CardSection>

        <CardSection>
           <Input 
                label="Phone"
                placeholder="555-555-555"
                value={this.props.phone}
                onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
           />
        </CardSection>
        
        <CardSection style={styles.pickerAreaStyle}>
            <Text style={styles.pickerLabelStyle}>
                Shift
            </Text>
            <Picker
                selectedValue={this.props.shift}
                onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
                style={{ flex: 1 }}
            >
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wendsday" value="Wendsday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
                <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
        </CardSection>
        

        <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
                Create
            </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 25,
        paddingTop: 10,
    },
    pickerAreaStyle: {
        flexDirection: 'column',
        height: 100
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);
