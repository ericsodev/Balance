import React, { Component } from 'react'
import './dashboard.css'
import { Card } from '../../components/Components'
import { Change, Progress } from '../../components/Indicators'
import Nav from '../../components/Navbar/Navbar'

export default class Dashboard extends Component {
    render() {
        return (
            <div className="w-full h-screen bg-accent-100/20 static flex flex-row">
                <Nav pos="left"></Nav>
                <div className="inline-block w-11/12 p-8">
                    <Card size="md" title="august income" value="$500"></Card>
                    <Card size="md" title="all time savings" value="$20,000" indicator={{ f: Change, props: { change: "-1", unit: "%" } }}></Card>
                    <Card size="lg" title="remaining budget" value="$500" description="what a shameful month" indicator={{ f: Progress, props: { value: 2, max: 3 } }} />
                </div>
            </div >
        )
    }
}

