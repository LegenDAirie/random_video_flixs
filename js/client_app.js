var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render: function() {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    MyTitleFactory({title: "titles", color: 'rebeccapurple'}),
    MyTitleFactory({title: "are", color: 'mediumaquamarine'}),
    MyTitleFactory({title: "everywhere", color: '#f88'}),
    MyTitleFactory({title: "yeeeeah", color: 'peru'}),
    MyTitleFactory({title: "okokok", color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
