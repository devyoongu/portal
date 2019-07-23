import React, {Component} from "react";
import {Route} from "react-router";
import {NavLink} from "react-router-dom";

import TechGit from "./Git/TechGit";
import TechReact from "./React/TechReact";

export default class Tech extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            match
        } = this.props;

        return (
            <div>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            뒤로가기
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/tech/git"} activeStyle={{fontWeight : "bold"}}>
                            Git
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/tech/react"} activeStyle={{fontWeight : "bold"}}>
                            React
                        </NavLink>
                    </li>
                </ul>

                <Route exact path={match.url} component={TechGit} />
                <Route path={`${match.url}/git`} component={TechGit} />
                <Route path={`${match.url}/react`} component={TechReact} />
            </div>
        )
    }
}