import React from 'react';

import { Card, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import logo from "../logo.svg";

const fixData = (data) => {
  return data
    .replace(/&amp;/gi, '&')
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&amp;nbsp;/gi, ' ')
    .replace(/&amp;rsquo;/gi, "'")
    .replace(/href=""([^"]+)""/g, 'href="$1"');
};

const Job = (props) => (
  <div className="Job">
    <Card>
      <CardHeader
        title={props.title.trim()}
        subtitle={props.location.name.trim()}
        avatar={logo}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <div dangerouslySetInnerHTML={{__html: fixData(props.content)}}/>
        <br/>
        <RaisedButton label="Apply" primary={true} />
      </CardText>
    </Card>
  </div>
);

export default Job;
