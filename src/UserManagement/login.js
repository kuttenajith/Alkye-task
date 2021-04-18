import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import $ from "jquery";
import Toolbar from '.././Components/Toolbar/Toolbar'
class homePage extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      businessname: '',
      value: '0'
    }
  }
  businessName(evt) {
    this.setState({
      businessname: evt.target.value,
    });
  }

  handleChange = value => {
    this.setState({
      value: value
    })
  };


  render() {

    const { value } = this.state

    $(document).ready(function () {

      var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

      allWells.hide();

      navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
          $item = $(this);

        if (!$item.hasClass('disabled')) {
          navListItems.removeClass('btn-success').addClass('btn-default');
          $item.addClass('btn-success');
          allWells.hide();
          $target.show();
          $target.find('input:eq(0)').focus();
        }
      });

      allNextBtn.click(function () {
        var curStep = $(this).closest(".setup-content"),
          curStepBtn = curStep.attr("id"),
          nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
          curInputs = curStep.find("input[type='text'],input[type='url']"),
          isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
          if (!curInputs[i].validity.valid) {
            isValid = false;
            $(curInputs[i]).closest(".form-group").addClass("has-error");
          }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
      });

      $('div.setup-panel div a.btn-success').trigger('click');
    });


    return (
      <div>
        <Toolbar />
        <hr />
        <div className="MainPage">
          <div class="stepwizard">
            <div class="stepwizard-row setup-panel">
              <div class="stepwizard-step col-xs-3">
                <a href="#step-1" type="button" class="btn btn-success btn-circle">1</a>
                <p>Business Details</p>
              </div>
              <div class="stepwizard-step col-xs-3">
                <a href="#step-2" type="button" class="btn btn-default btn-circle" disabled="disabled">2</a>
                <p>Campaign Details</p>
              </div>
              <div class="stepwizard-step col-xs-3">
                <a href="#step-3" type="button" class="btn btn-default btn-circle" disabled="disabled">3</a>
                <p>Targets & Budgets</p>
              </div>
              <div class="stepwizard-step col-xs-3">
                <a href="#step-4" type="button" class="btn btn-default btn-circle" disabled="disabled">4</a>
                <p>Delivery & Payment</p>
              </div>
              <div class="stepwizard-step col-xs-3 d-none">
                <a href="#step-5" type="button" class="btn btn-default btn-circle" disabled="disabled">5</a>
                <p>Delivery & Payment</p>
              </div>
            </div>
          </div>
          <form role="form">
            <div class="panel panel-primary setup-content innerSteps col-12" id="step-1">
              <div class="col-sm-6">
                <h2>Let's get started with your business details</h2>
                <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
              <div class='col-sm-6'>
                <div class="panel-heading">
                  <h3 class="panel-title">Fill-in the form below</h3>
                </div>
                <div class="panel-body">
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="BUSINESS NAME"
                      value={this.state.businessname}
                      onChange={(evt) => this.businessName(evt)} />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="WEBSITE" />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="LOCATION" />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="PHONE NUMBER" />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="BUSINESS CATEGORY" />
                  </div>
                  <button class="btn btn-primary dashboardButton nextBtn pull-right position-relative d-flex justify-content-between" type="button">
                    <i class="fa fa-arrow-right nextIcon" aria-hidden="true"></i>Next</button>
                </div></div>
            </div>

            <div class="panel panel-primary setup-content col-12" id="step-2">
              <div class='col-sm-6'>
                <h2>Let's talk about your campaign</h2>
                <div class="panel-body">
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="CAMPAIGN NAME" />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="date" required="required"
                      class="form-control" placeholder="CAMPAIGN START DATE" />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="date" required="required"
                      class="form-control" placeholder="CAMPAIGN END DATE" />
                  </div>
                  <div class="form-group">
                    <input maxlength="100" type="text" required="required"
                      class="form-control" placeholder="ENTER 5 POTENTIAL CLIENTS (NAME OR WEBSITES)" />
                  </div>
                </div>
              </div>
              <div class='col-sm-12 d-flex justify-content-between navButtons'>
                <button class="btn btn-primary nextBtn pull-right position-relative d-flex justify-content-end" type="button">
                  <i class="fa fa-arrow-left prevIcon" aria-hidden="true"></i>Previous</button>
                <button class="btn btn-primary nextBtn pull-right position-relative d-flex justify-content-start" type="button">
                  <i class="fa fa-arrow-right nextIcon" aria-hidden="true"></i>Next</button>
              </div>
            </div>

            <div class="panel panel-primary setup-content col-12" id="step-3">
              <div class='d-flex thirdSection'>
                <div class='col-sm-8'>
                  <h2>Let's talk about your budgets</h2>
                  <h4>Fill-in the form the below</h4>
                  <p>DAILY BUDGET</p>
                  <div className='slider'>
                    <Slider
                      min={0}
                      max={100}
                      value={value}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div class='col-sm-4 budegetCard'>
                  <div class="card border-0">
                    <ul class="list-group list-group-flush">
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Leads Per Day</p>
                        <p class="pst-group-item">{this.state.value <= 50 ? '10 - 20' : '20 - 40'}</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Cost Per Lead</p>
                        <p class="pst-group-item">$2.5 - $5</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Start Date</p>
                        <p class="pst-group-item">22nd June 2020</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">End Date</p>
                        <p class="pst-group-item">No end date</p>
                      </div>
                    </ul>
                  </div>
                </div></div>
              <div class='col-sm-12 d-flex justify-content-between navButtons'>
                <button class="btn btn-primary nextBtn pull-right position-relative d-flex justify-content-end" type="button">
                  <i class="fa fa-arrow-left prevIcon" aria-hidden="true"></i>Previous</button>
                <button class="btn btn-primary nextBtn pull-right position-relative d-flex justify-content-start" type="button">
                  <i class="fa fa-arrow-right nextIcon" aria-hidden="true"></i>Next</button>
              </div>
            </div>

            <div class="panel panel-primary setup-content col-12" id="step-4">
              <div class='col-sm-12 d-flex thirdSection'>
                <div class='col-sm-8'>
                  <h2>Just a few more details, before you are live</h2>
                  <div class='firstSection'>
                    <h4>Fill-in the form the below. You will be charged at the end of the day.</h4>
                    <div class='d-flex col-sm-12 inputSection'>
                      <input maxlength="100" type="text" required="required"
                        class="form-control mr-2" placeholder="CREDIT CARD NUMBER" />
                      <input maxlength="100" type="date" required="required"
                        class="form-control mr-2" placeholder="EXPIRY DATE" />
                      <input maxlength="100" type="integer" required="required"
                        class="form-control" placeholder="CVV" />
                    </div>
                  </div>
                  <div class='secondSection'>
                    <h4>HOW WOULD YOU LIKE TO RECIEVED THE LEADS?</h4>
                    <div class='d-flex contactSection'>
                      <button class="btn btn-light contactButtons" type="button">EMAIL ME</button>
                      <button class="btn btn-light contactButtons" type="button">CONNECT TO MY CRM</button>
                    </div>
                  </div>
                </div>
                <div class='col-sm-4 budegetCard'>
                  <div class="card border-0">
                    <ul class="list-group list-group-flush">
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Leads Per Day</p>
                        <p class="pst-group-item">{this.state.value == 1 ? '10 - 20' : '20 - 40'}</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Daily Budget</p>
                        <p class="pst-group-item">$50</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Cost Per Lead</p>
                        <p class="pst-group-item">$2.5 - $5</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">Start Date</p>
                        <p class="pst-group-item">22nd June 2020</p>
                      </div>
                      <hr />
                      <div class='d-flex pt-2 justify-content-between'>
                        <p class="pst-group-item">End Date</p>
                        <p class="pst-group-item">No end date</p>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              <div class='col-sm-12 d-flex justify-content-between navButtons'>
                <button class="btn btn-primary nextBtn pull-right position-relative d-flex justify-content-end" type="button">
                  <i class="fa fa-arrow-left prevIcon" aria-hidden="true"></i>Previous</button>
                <button class="btn btn-primary nextBtn pull-right position-relative d-flex justify-content-start" type="button">
                  <i class="fa fa-arrow-right nextIcon" aria-hidden="true"></i>Next</button>
              </div>
            </div>

            <div class="panel panel-primary setup-content innerSteps col-12" id="step-5">
              <div class='col-sm-8'>
                <h3 class="panel-title">Congratulations!</h3>
                <h5>Your campaign is being processed. We will start
                    delivering the first lead within the next 24 hours</h5>
                <button class="btn dashboardButton position-relative d-flex justify-content-between" type="button">
                  <i class="fa fa-arrow-right nextIcon" aria-hidden="true"></i><a href='/aboutus'>Go To Dashboard</a></button>
              </div>   <div class='col-sm-4 budegetCard bg-white'>
                <div class="card border-0">
                  <ul class="list-group list-group-flush">
                    <div class='d-flex pt-2 justify-content-between bg-white'>
                      <p class="pst-group-item">Leads Per Day</p>
                      <p class="pst-group-item">{this.state.value == 1 ? '10 - 20' : '20 - 40'}</p>
                    </div>
                    <hr />
                    <div class='d-flex pt-2 justify-content-between bg-white'>
                      <p class="pst-group-item">Daily Budget</p>
                      <p class="pst-group-item">$50</p>
                    </div>
                    <hr />
                    <div class='d-flex pt-2 justify-content-between bg-white'>
                      <p class="pst-group-item">Cost Per Lead</p>
                      <p class="pst-group-item">$2.5 - $5</p>
                    </div>
                    <hr />
                    <div class='d-flex pt-2 justify-content-between bg-white'>
                      <p class="pst-group-item">Start Date</p>
                      <p class="pst-group-item">22nd June 2020</p>
                    </div>
                    <hr />
                    <div class='d-flex pt-2 justify-content-between bg-white'>
                      <p class="pst-group-item">End Date</p>
                      <p class="pst-group-item">No end date</p>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default homePage;
