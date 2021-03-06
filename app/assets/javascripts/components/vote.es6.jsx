class VoteButton extends React.Component {

  constructor() {
  super();
  this.state = {
    vote_count: 0,
  }
  this.upVote = this.upVote.bind(this)
  this.downVote = this.downVote.bind(this)
}
  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/votes',
      data: this.props
    })
    .done((response) => {
      this.setState({
        vote_count: response
      })
    })
  }

  upVote(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/votes/upvote',
      data: this.props
    })
    .done((response) => {
      this.setState({
        vote_count: response
      })
    })
  }

  downVote(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/votes/downvote',
      data: this.props
    })
    .done((response) => {
      this.setState({
        vote_count: response
      })
    })
  }

  render() {
    return(
      <div id="vote">
        <p>Vote Count: {this.state.vote_count}</p>
        <form className="vote-buttons" onSubmit = {this.upVote}>
          <input type="submit" value="&uarr;"/>
        </form>
        <form className="vote-buttons" onSubmit = {this.downVote}>
          <input type="submit" value="&darr;"/>
        </form>
      </div>
    )
  }
}
