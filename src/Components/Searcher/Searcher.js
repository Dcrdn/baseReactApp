import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import CustomDatePicker from '../CustomDatePicker/CustomDatePicker';
import { Typography } from 'antd';
import { Form,  Button, Card } from 'antd';
import './Searcher.css';

const { Title } = Typography;

export default class Searcher extends Component {
    render() {
        return (
            <Card id="card" style={{ width: 400 }}>
                <Title>Tu nuevo hogar</Title>

                <Form>
                <Form.Item>
                    <SearchBar />
                </Form.Item>
                <Form.Item>
                    <CustomDatePicker />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" style={{float:'right'}}htmlType="submit" className="login-form-button" onClick={() => this.nextPath('/the/path') }>
                        Buscar
                    </Button>
                </Form.Item>
        </Form>
      </Card>                
        )
    }
}
