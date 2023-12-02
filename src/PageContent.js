import { Component } from "react";
import { ThemeContext } from "./contexts/themeContext";


export default class PageContent extends Component {
    static contextType = ThemeContext;
    render() {
        const { isDarkTheme } = this.context;
        const style = {
            backgroundColor: !isDarkTheme ? 'white' : 'black',
            width: '100vw',
            height: '100vh'
        }

        return <div style={style}> {this.props.children} </div>
    }
}