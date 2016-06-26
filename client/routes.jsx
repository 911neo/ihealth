import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import IhealthWrapper from './ihealth/IhealthWrapper.jsx';
import About from './About.jsx';
import IhealthDetail from './ihealth/IhealthDetail.jsx';

FlowRouter.route('/',{
action() {

 mount(MainLayout, {

 content:(<IhealthWrapper />)

 })

}


});

FlowRouter.route('/about',{
action() {

 mount(MainLayout, {

 content:(<About />)

 })

}


});

FlowRouter.route('/ihealth/:id',{
action(params) {

 mount(MainLayout, {

 content:(<IhealthDetail id={params.id} />)

 })

}


});
