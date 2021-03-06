var Comment= require('./Comment.jsx');
var React = require('react');

module.exports = React.createClass({
    render: function () {
        var commentNodes = this.props.data.reverse().map(function (comment) {
            return (
                <div  key={comment.id}>
                    <Comment author={comment.author}>
                        {comment.text}
                    </Comment>
                    <hr />
                </div>


            )
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
})