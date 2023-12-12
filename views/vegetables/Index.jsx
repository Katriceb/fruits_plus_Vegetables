const React = require('react');

class Index extends React.Component {
    render() {
        const { vegetables } = this.props;
        // const vegetables = this.props.fruits;

        return (
            <div>
                <h1>Vegetables Index Page</h1>
                <ul>
                    {vegetables.map((vegetable, i) => {
                        return (
                            <li>
                                The {' '}
                                <a href={`/fruits/${vegetable._id}`}>
                                    {vegetable.name}
                                </a> {' '}
                                is {vegetable.color} <br></br>
                                {fruit.readyToEat
                                ? `It is ready to eat`
                            :   `It is NOT ready to eat`}
                            <br />
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;