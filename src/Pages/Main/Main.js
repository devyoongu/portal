import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Main

                <ul>
                    <li>
                        <Link to={"/about"}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/portfolio"}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to={"/tech"}>
                            Tech
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}