// JSX and Babel Compiler
class ReactContainer extends React.Component {
    render() {
        return (
            <div>
                Hello! Welcome to Kalvium   
                <div>This is babel</div>
            </div>
        );
    }  
}

const container = document.getElementById('react-container');
// Directly pass the component to render
ReactDOM.render(<ReactContainer/>, container);
