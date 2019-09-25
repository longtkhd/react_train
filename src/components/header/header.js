import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header class="masthead text-center text-white">
                <div class="masthead-content">
                    <div class="container">
                        <h1 class="masthead-heading mb-0">One Page Wonder</h1>
                        <h2 class="masthead-subheading mb-0">Will Rock Your Socks Off</h2>
                        <a href="facebook.com/longnguyen2709" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
                    </div>
                </div>
                <div class="bg-circle-1 bg-circle"></div>
                <div class="bg-circle-2 bg-circle"></div>
                <div class="bg-circle-3 bg-circle"></div>
                <div class="bg-circle-4 bg-circle"></div>
            </header>
        )
    }
}
