import React, { Component } from 'react';
import Member from './Member';

const getFakeMembers = count => new Promise((resolve, reject) => {
  const api = `https://api.randomuser.me/?nat=US&results=${count}`;
  const request = new XMLHttpRequest();
  request.open('GET', api);
  request.onload = () => (request.status == 200) ?
    resolve(JSON.parse(request.response).results) :
    reject(Error(request.status.Text));
  request.onerror = err => reject(err);
  request.send();
});

class MemberList extends Component {
  constructor() {
    super();
    this.state = {
      members: [],
      loading: false,
      error: null,
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    getFakeMembers(this.props.count).then(
      (members) => {
        this.setState({ members, loading: false });
      },
      (error) => {
        this.setState({ error, loading: false });
      },
    );
  }

  componentWillUpdate() {
    console.log('updating lifecycle');
  }

  render() {
    const { members, loading, error } = this.state;
    return (
      <div className="member-list">
        {(loading) ?
          <span>Loading Members</span> :
          (members.length) ?
            members.map((user, i) =>
              <Member key={i} {...user} />) :
            <span>0 members loaded...</span>
        }
        {(error) ? <p>Error Loading Members: error</p> : ''}
      </div>
    );
  }
}

export default MemberList;
