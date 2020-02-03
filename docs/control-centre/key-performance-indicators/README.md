---
title: Key Performance Indicators
---

# Key Performance Indicators

The keyword here is **Indicator**. Check against [expectations](../expectations/) for your [strategic direction](../operations/direction/). The key driver is to quickly identify a problem that requires deeper analysis.

## [Finances](./finances/)

Are profits worth the effort?

## [Quality Control](./quality/)

Are you delivering successful outcomes?

## [Productivity](./productivity/)

Do you value your time highly enough?

## [Marketing](./marketing/)

Are you spending time and money effectively?

## [System Admin](./system-admin/)

Who has been accessing what and when?

## Copy into place

            businessFunction = "Quality";

            #region Outcomes

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Successful Outcomes",
                "Percentage of all discharges where client goals were met",
                "%",
                "ratio");

            kpiDefinition.Endpoint = "successful-outcomes";
            kpiDefinition.FollowupAction = "Improve the quality of service or set more realistic goals";

            measures.Add(kpiDefinition);

            #endregion

            #region Retention Ratio

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Retention",
                "initial vs followup appointments",
                "Total",
                "sum"
                );

            kpiDefinition.ChartLabel = "Count";
            kpiDefinition.ChartMeasureType = "sum";

            measures.Add(kpiDefinition);

            #endregion

            #region Injuries

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Injuries",
                "Injury type frequency",
                "Total",
                "sum"
                );

            kpiDefinition.FollowupAction = @"
            lead clinician to review before planning inservice training.";

            kpiDefinition.KeyQuestions = @"
            <br>Which are the most valuable injuries?
            <br>Is there a particular type of injury for a person that converts
            <br>Are any injuries seasonal? So can be aligned with marketing content";

            measures.Add(kpiDefinition);

            #endregion

            #region Goals

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Goals",
                "",
                "Total",
                "sum"
                );

            measures.Add(kpiDefinition);

            #endregion

            #region Plan Completion

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Completion",
                @"The number of conditions where completed appointments is greater or equal to the agreed treatment plan",
                "Total",
                "sum"
                );

            kpiDefinition.ChartMeasureType = "sum";

            measures.Add(kpiDefinition);

            #endregion

            #region Culture

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Culture",
                @"Staff that have left vs new vs total staff",
                "Total",
                "sum"
                );

            measures.Add(kpiDefinition);

            #endregion

            #region Not Implemented


            #region Triggers

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Triggers",
                @"How many conditions require an internal review",
                "Total",
                "sum"
                );

            kpiDefinition.UseKpi = false;

            measures.Add(kpiDefinition);

            #endregion

            #endregion

            #endregion


            #region Productivity

            businessFunction = "Productivity";

            #region Saturation

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Saturation",
                @"Saturation = Client Hours + Class Hours / (Scheduled Hours - Leave)
                <br>Business Saturation = (Client Hours + Class Hours + Admin Hours) / (Scheduled - Leave Hours)",
                "%",
                "ratio"
                );

            kpiDefinition.PrerequisiteSteps = @"Ensure there are no historical appointments remaining in Confirmed state";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"Check if double booking leave, Provider Appointment ApprInservice is correctly use,  ";

            kpiDefinition.ChartStacked = "false";
            kpiDefinition.ChartType = "line";

            kpiDefinition.AlertThresholds = new List<KpiAlertThreshold>
            {
                new KpiAlertThreshold(0, 1, .75M),
                new KpiAlertThreshold(1, 1, .85M)
            }.ToList();

            measures.Add(kpiDefinition);

            #endregion

            #region Class Saturation

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Class Saturation",
                @"Actual Client Class Hours / Available Client Class Hours",
                "%",
                "ratio"
                );

            kpiDefinition.Endpoint = "class-saturation";
            kpiDefinition.FollowupAction = @"Create more marketing leads<br>Improve quality of service";

            measures.Add(kpiDefinition);

            #endregion

            #region Appointment State

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Appointment State",
                @"Historical appointments status",
                "Total Appts",
                "sum"
                );

            kpiDefinition.Endpoint = "appointments-state";

            kpiDefinition.PrerequisiteSteps = @"No historical Appointment should exist in the Confirmed state";
            kpiDefinition.FollowupAction = @"Correct the status of any Confirmed appointments";
            kpiDefinition.KeyQuestions = @"Identify problem clients<br>Review notification strategy";

            measures.Add(kpiDefinition);

            #endregion

            #region Business Admin Hours

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Business Admin",
                @"Provider Apppointment Types",
                "Total Hours",
                "sum"
                );

            kpiDefinition.Endpoint = "business-admin";
            kpiDefinition.FollowupAction = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Events

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Events",
                @"Milestones, blockages",
                "Total",
                "sum"
                );

            kpiDefinition.Definition = @"";
            kpiDefinition.FollowupAction = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Documents

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Documents",
                @"Created from templates",
                "Total",
                "sum"
                );

            measures.Add(kpiDefinition);

            #endregion

            #region Security Access Logs

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Security Access Logs",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.UseKpi = false;

            measures.Add(kpiDefinition);

            #endregion


            #endregion


            #region Marketing

            businessFunction = "Marketing";

            #region Average Sales per Client

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Average Client Sales",
                @"",
                "Average",
                "ratio"
                );

            kpiDefinition.Endpoint = "average-client-sales";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";


            measures.Add(kpiDefinition);

            #endregion

            #region Client Group

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Client Groups",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "client-groups";
            kpiDefinition.FollowupAction = @"Which groups?";
            kpiDefinition.KeyQuestions = @"Is marketing efforts successfully attracting desired profile customers?";

            measures.Add(kpiDefinition);

            #endregion

            #region Client Events

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Client Events",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "client-events";
            kpiDefinition.Definition = @"Completed Client Interactions";
            kpiDefinition.FollowupAction = @"What impact has interaction with clients
                had on growing revenue per client?";

            measures.Add(kpiDefinition);

            #endregion

            #region Client Services

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Services",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.FollowupAction = @"";
            kpiDefinition.UseKpi = true;


            measures.Add(kpiDefinition);

            #endregion

            #region Advertising Channels (Referral Sources - How did you learn of us)

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Marketing Channels",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "marketing-channels";

            kpiDefinition.ApiQueryOptions = new List<ApiQueryOption>
            {
                new ApiQueryOption("dataSource", "Source", "lov", new List<ApiQueryOptionSetting> {
                    new ApiQueryOptionSetting("Client"),
                    new ApiQueryOptionSetting("Condition")
                }.ToList())
            }.ToList();

            measures.Add(kpiDefinition);

            #endregion

            #region Referrer Relation Types

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Referrer Types",
                @"The top referral type channels",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "referrer-types";
            kpiDefinition.FollowupAction = "Networking";

            kpiDefinition.ApiQueryOptions = new List<ApiQueryOption>
            {
                new ApiQueryOption("dataSource", "Source", "lov", new List<ApiQueryOptionSetting> {
                    new ApiQueryOptionSetting("Client"),
                    new ApiQueryOptionSetting("Condition")
                }.ToList())
            }.ToList();

            measures.Add(kpiDefinition);

            #endregion

            #region Referrer Names

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Referrers",
                @"Top Referrers",
                "Total",
                "sum"
                );

            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            kpiDefinition.ApiQueryOptions = new List<ApiQueryOption>
            {
                new ApiQueryOption("dataSource", "Source", "lov", new List<ApiQueryOptionSetting> {
                    new ApiQueryOptionSetting("Client"),
                    new ApiQueryOptionSetting("Condition")
                }.ToList())
            }.ToList();

            measures.Add(kpiDefinition);

            #endregion

            #region Why Us

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Why Us",
                @"Why Us setting on Client or Condition",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "why-us";

            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            kpiDefinition.ApiQueryOptions = new List<ApiQueryOption>
            {
                new ApiQueryOption("dataSource", "Source", "lov", new List<ApiQueryOptionSetting> {
                    new ApiQueryOptionSetting("Client"),
                    new ApiQueryOptionSetting("Condition")
                }.ToList())
            }.ToList();

            measures.Add(kpiDefinition);

            #endregion


            #region How appts were booked

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Online Bookings",
                @"Online bookings vs total appointments",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "online-bookings";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"How successful is marketing strategy";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Time when appts are booked

            /*
             * Need to introduce time dependent appts peak / off peak pricing
             *
             * Get heatmap of most desired time for bookings
             * for future pricing analysis
             */

            #endregion

            #region Not Implemented

            #region New Clients

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "New Clients",
                @"The number of newly created clients",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "new-clients";

            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = "Adjust marketing tactics to meet growth strategy";
            kpiDefinition.KeyQuestions = @"";
            kpiDefinition.UseKpi = false;

            measures.Add(kpiDefinition);

            #endregion

            #region Return on Investment / Cost of Acquistion

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Cost of Acquistion",
                @"The number of new clients by marketing channel cost",
                "Average Cost",
                "average"
                );

            kpiDefinition.Endpoint = "cost-of-acquistion";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = "";
            kpiDefinition.KeyQuestions = @"

What is cost of acquistion for new customers?
<br>How effective are sales and marketing channels had on growing revenue per client?";
kpiDefinition.UseKpi = false;

            measures.Add(kpiDefinition);

            #endregion

            #region Testimonials

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Testmonials",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = "";
            kpiDefinition.KeyQuestions = @"";
            kpiDefinition.UseKpi = false;

            measures.Add(kpiDefinition);

            #endregion

            #endregion

            #endregion


            #region Financials

            businessFunction = "Financial";

            #region Can Track By Provider / Staff

            #region Provider Margin

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Provider Margin",
                @"Provider Wages divided by Total Appointment Related Charges",
                "%",
                "ratio"
                );

            kpiDefinition.Endpoint = "provider-margin";
            kpiDefinition.PrerequisiteSteps = @"Use Payroll Employees to set a default wages or enter wages as they are paid";
            kpiDefinition.FollowupAction = @"Wages should be less than 40% of Total Client Charges";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Commission

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Commission",
                @"Commission paid to staff",
                "Cost",
                "sum"
                );

            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";


            #region Chart Options

            options = new List<KpiChartDto>();
            chart = new KpiChartDto();

            chart.DefaultViewInd = 1;
            chart.AggFunction = "sum";

            options.Add(chart);
            kpiDefinition.ChartOptions = options;

            #endregion

            measures.Add(kpiDefinition);

            #endregion

            #region Product Sales

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Product Sales",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "product-sales";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #endregion

            #region Cashflow

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Cashflow",
                @"Payments Recieved / Creditor Payments",
                "Ratio",
                "ratio"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #region Expenses

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Expenses",
                @"Creditor payments",
                "Cost",
                "sum"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            #region Chart Options

            options = new List<KpiChartDto>();
            chart = new KpiChartDto();

            options.Add(chart);
            kpiDefinition.ChartOptions = options;

            #endregion

            measures.Add(kpiDefinition);

            #endregion

            #region Payments

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Payments",
                "Financial transactions recorded in GPM",
                "Revenue",
                "sum"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            #region Chart Options

            options = new List<KpiChartDto>();
            chart = new KpiChartDto();

            options.Add(chart);
            kpiDefinition.ChartOptions = options;

            #endregion

            measures.Add(kpiDefinition);

            #endregion

            #endregion

            #region Daily Takings

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Daily Takings",
                @"The number of new clients by referral type",
                "Total",
                "sum"
                );

            kpiDefinition.Endpoint = "daily-takings";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";
            kpiDefinition.UseKpi = false;

            measures.Add(kpiDefinition);

            #endregion

            #region Budget vs Results

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Budget vs Results",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            kpiDefinition.Endpoint = "budget-vs-results";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"Review strategy";
            kpiDefinition.KeyQuestions = @"";
            kpiDefinition.UseKpi = false;

            kpiDefinition.ChartType = "line";

            measures.Add(kpiDefinition);

            #endregion

            #region Aged Debt TODO

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Aged Debt",
                @"Debt over one month old",
                "Total",
                "sum"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            kpiDefinition.Endpoint = "aged-debt-snapshot";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"Review recovery actions";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Membership Sales

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Memberships",
                @"",
                "Total",
                "sum"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            // kpiDefinition.Endpoint = "membership-sales";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Return on Location - TODO

            // need room Sq Metres

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Return on Location",
                @"The number of new clients by referral type",
                "Total",
                "sum"
                );

            kpiDefinition.CanAnalyseByProviderInd = 0;
            kpiDefinition.Endpoint = "return-on-location";
            kpiDefinition.PrerequisiteSteps = @"";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";
            kpiDefinition.UseKpi = false;

            #endregion

            #endregion


            #region Client (Sales) Lists

            businessFunction = "Clients";

            #region Problem Goal Outcome

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Problem Goal Outcome",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "problem-goals-outcomes";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Rebook or Discharge

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Rebook or Discharge",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "rebook-or-discharge";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Waiting List

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Waiting List",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "waiting-list";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Client Action Events Due

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Actions Due",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "actions-due";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Follow ups Due

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Follow up",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "follow-up";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Referred In

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Referred In",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "referred-in";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Cross Referral

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Cross Referral",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "cross-referral";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Top Revenue

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Top Revenue",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "top-revenue";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Net Promoter Score

            // could use discharge outcome score
            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Net Promoter Score",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "net-promoter-score";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Service Modality

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "service-modality",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "service-modality";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Journey (Service) Phase

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Journey",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "journey";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #region Inury Type

            kpiDefinition = new KpiDefinitionDto(
                businessFunction,
                "Injury",
                @"",
                "",
                ""
                );

            kpiDefinition.Endpoint = "injury";
            kpiDefinition.FollowupAction = @"";
            kpiDefinition.KeyQuestions = @"";

            measures.Add(kpiDefinition);

            #endregion

            #endregion
