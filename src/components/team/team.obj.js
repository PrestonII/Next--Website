import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { TeamMemberListing as TeamText } from '../subcomponents/team/teamtext.obj';
import { TeamImage } from '../subcomponents/team/teamimage.obj';
import TeamMemberDetailPage from './team.detail.obj';
import teamData from '../../data/data.team.json';
import './team.style.desktop.scss';
import './team.style.mobile.scss';

export function TeamPage(props) {
  const { match } = props;

  return (
    <Switch>
      <Route path={`${match.url}/:memberId`} render={(props) => <TeamMemberDetailPage {...props} />} />
      <Route exact path={match.url} render={(props) => (<TeamOverview {...props} />)} />
    </Switch>
  )
}

export default class TeamOverview extends React.Component {
  constructor(props) {
    super (props);


  }

  render() {
    return (
      <div className="team">
        <div className="adam">
          <TeamText data={teamData}/>
        </div>
        <div className="andrew"></div>
        <div className="bharti"></div>
        <div className="chris"></div>
        <div className="jeff"></div>
        <div className="kp"></div>
        <div className="mina"></div>
        <div className="preston"></div>
        <div className="ruyi"></div>
        <div className="stephen"></div>
        <div className="trapazoidbar1"></div>
        <div className="trapazoidbar2"></div>
        <div className="trapazoidbar3"></div>
        <div className="trapazoidbar4"></div>
        <div className="teamtitle">
          <p> A Global Team </p>
        </div>
        {/* <div className="teamtext">
          <TeamText data={teamData}/>
        </div> */}
        {/* <div className ="teamimage">
          <TeamImage />
        </div> */}
      </div>
    );
  }
}
