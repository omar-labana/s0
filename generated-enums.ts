// Generated on: 17:12 Wednesday 20 Aug 2025

export enum E_SortDirection {
  Descending = 1,
  Ascending = 2
}

export enum E_StrategyManagementActionTypeCode {
  StrategyObjectives = 1,
  Project = 2
}

export enum E_MeetingAttendeeStatusCodes {
  New = 1,
  Present = 2,
  Absent = 3
}

export enum E_DurationTypeCodes {
  Day = 1,
  Month = 2,
  Year = 3
}

export enum E_TenderInqueryTypes {
  Question = 1,
  Complaint = 2
}

export enum E_TenderScope {
  General = 1,
  Limited = 2
}

export enum E_Divisibility {
  Divisible = 1,
  NonDivisible = 2
}

export enum E_TenderAccessType {
  Internal = 1,
  External = 2
}

export enum E_TenderOfferMethod {
  FinTechOffer = 1,
  FinancialOffer = 2
}

export enum E_TenderEvaluationMethod {
  ScorePoint = 1,
  Price = 2
}

export enum E_Alternativity {
  AllowedAlternativeOffers = 1,
  NotAllowedAlternativeOffers = 2
}

export enum E_SmaplesNeed {
  NeedSamples = 1,
  NoNeedSamples = 2
}

export enum E_NegotiateMethod {
  WithAllOffersRepresenters = 1,
  WithLowestOfferRepresenter = 2
}

export enum E_ImplementationType {
  Specific = 1,
  Custom = 2
}

export enum E_TenderPhaseTypeEnum {
  Planning = 1,
  Preparation = 2,
  Approvals = 3,
  Announcement = 4,
  Awarding = 5,
  Contracting = 6
}

export enum E_ResultStatus {
  Ok = 0,
  Created = 1,
  Error = 2,
  Forbidden = 3,
  Unauthorized = 4,
  Invalid = 5,
  NotFound = 6,
  NoContent = 7,
  Conflict = 8,
  CriticalError = 9,
  Unavailable = 10
}

export enum E_ValidationSeverity {
  Error = 0,
  Warning = 1,
  Info = 2
}

export enum E_TaskTypeEnum {
  General = 1,
  Approval = 2,
  CreateTender = 3,
  CompleteTenderInfo = 4,
  CancelTender = 5,
  Review = 6
}

export enum E_TaskAssignmentStatusTypes {
  New = 1,
  Completed = 2,
  InProgress = 3,
  Late = 4
}

export enum E_SubAgencyActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5
}

export enum E_SubAgencyActionStatus {
  Success = 1,
  Faluire = 2,
  Error = 3
}

export enum E_StrategyObjectiveStatus {
  OnTime = 1,
  Late = 2,
  Achieved = 3
}

export enum E_StrategyObjectiveStepIndicator {
  InitialData = 1,
  StackHolders = 2,
  KPIs = 3,
  Projects = 4
}

export enum E_BalancedScorecardPerspectiveCodes {
  Financial = 1,
  Customer = 2,
  InternalProcesses = 3,
  LearningAndGrowth = 4
}

export enum E_ProgressIndicator {
  Green = 1,
  Yellow = 2,
  Red = 3
}

export enum E_MeasurementCycle {
  Monthly = 1,
  Quarterly = 2,
  Yearly = 3
}

export enum E_KpiUnitType {
  Percentage = 1,
  Number = 2,
  Space = 3,
  Currency = 4,
  Time = 5,
  Lenght = 6,
  Volume = 7
}

export enum E_ContractType {
  Tender = 1,
  Practice = 2,
  DirectContract = 3
}

export enum E_ContractStatus {
  Draft = 1,
  Submitted = 2,
  UnderReview = 3,
  Reviewed = 4,
  Approved = 5,
  Rejected = 6,
  InProgress = 7,
  InSigning = 9,
  Signed = 10,
  Completed = 11,
  RequiresFinancialApproval = 12
}

export enum E_AccountType {
  Guidance = 1,
  Chapter = 2,
  Group = 3,
  Category = 4,
  Item = 5,
  Type = 6
}

export enum E_TenderTypeCodes {
  Tender = 1,
  Procurement = 2,
  DirectContract = 3,
  PurchaseOrder = 4
}

export enum E_ContractTypeCodes {
  New = 1,
  Extend = 2,
  Renewal = 3
}

export enum E_WorkPlanItemFinancialYearStatusCodes {
  New = 1,
  InProgress = 2,
  Completed = 3,
  Cancelled = 4
}

export enum E_TenderStatusEnum {
  New = 1,
  Finished = 2,
  Reopened = 3,
  Suspend = 4,
  Cancelled = 5,
  Rejected = 6
}

export enum E_MeetingStatus {
  Upcoming = 1,
  Completed = 2,
  Cancelled = 3,
  Finished = 4
}

export enum E_MeetingMethods {
  Online = 0,
  OnSite = 1
}

export enum E_MeetingTypes {
  Meeting = 1,
  Preliminary = 2
}

export enum E_ProjectStatus {
  NotStarted = 1,
  InProgress = 2,
  Completed = 4
}

export enum E_ProjectTypes {
  Developmental = 1,
  Operational = 2,
  WithinAGovernmentWorkProgram = 3
}

export enum E_ProjectSubTypes {
  Constructional = 1,
  Upgrading = 2,
  Service = 3
}

export enum E_InitiativeStatus {
  NotStarted = 1,
  InProgress = 2,
  Completed = 4
}

export enum E_InitiativePriority {
  High = 1,
  Medium = 2,
  Low = 3
}

export enum E_InitiativeMilestoneStatus {
  NotStarted = 1,
  InProgress = 2,
  Completed = 3,
  Delayed = 4,
  Cancelled = 5
}

export enum E_InitiativeDeliverableStatus {
  NotDelivered = 1,
  InProgress = 2,
  Delivered = 3,
  Delayed = 4,
  Cancelled = 5
}

export enum E_KpiPolarity {
  Positive = 1,
  Negative = 2
}

export enum E_KpiCategory {
  Quantitative = 1,
  Qualitative = 2
}

export enum E_GoalType {
  Quantitative = 1,
  Qualitative = 2
}

export enum E_ContractSubCategoryCodes {
  SupplyInstallOperateMaintainDevicesTender = 1,
  SupplyInstallOperateMaintainDevicesProcurement = 2,
  SupplyInstallOperateMaintainDevicesDirectContract = 3,
  SupplyGoodsTender = 4,
  SupplyGoodsProcurement = 5,
  SupplyGoodsDirectContract = 6
}

export enum E_ContractCategoryCodes {
  SupplyInstallOperateMaintainDevices = 1,
  SupplyGoods = 2
}

export enum E_ContractMonitorType {
  Monitor = 1,
  CanModify = 2,
  CanRead = 3
}

export enum E_AttachmentCategoryTypes {
  RFP = 1,
  Document = 2,
  Action = 3,
  Committee = 4,
  Meeting = 5,
  CompanyOffer = 6,
  TenderInqueryByFile = 7,
  TaskAssignment = 8,
  Contract = 9,
  ContractRequests = 10,
  BankGuarantee = 11,
  Invoice = 12,
  InvoiceRegisterBankPayment = 13,
  MaintenanceEngineering = 14,
  ProjectIssue = 15,
  Project = 16,
  StrategyManagementAction = 17,
  Projectobstacle = 18,
  StrategyObjectiveAction = 19,
  StrategyObjective = 20
}

export enum E_TaskAssignmentCategoryTypes {
  Meeting = 1,
  Task = 2,
  Tender = 3,
  Attachment = 4,
  RequestToAnswerQuestion = 5,
  Invoice = 6,
  Contract = 7,
  Project = 8
}

export enum E_TaskAssignmentRelations {
  FinishToStart = 1,
  FinishToFinish = 2,
  StartToStart = 3,
  StartToFinish = 4
}

export enum E_ContractRequestStatus {
  Extension = 1,
  Renewal = 2,
  NewContract = 3
}

export enum E_SystemApplications {
  Tendering = 1,
  Budgeting = 2,
  Contracts = 3,
  Strategies = 4
}

export enum E_AppUserSource {
  Portal = 0,
  Entra = 1
}

export enum E_ProjectIssueState {
  New = 1,
  InProgress = 2,
  Resolved = 3,
  Closed = 4
}

export enum E_ProgramLevel {
  Main = 1,
  Sub = 2,
  Project = 3
}

export enum E_MeetingDiscussionType {
  People = 1,
  General = 2
}

export enum E_MeetingDecisionStatus {
  Approved = 1,
  Rejected = 2,
  NotReplied = 3
}

export enum E_StrategyObjectiveEquationTagType {
  Number = 0,
  Variable = 1,
  Operator = 2
}

export enum E_InvitationStatus {
  Pending = 1,
  Accepted = 2,
  Rejected = 3,
  Expired = 4
}

export enum E_InvitationEntityType {
  Meeting = 1
}

export enum E_ChangeOrderType {
  Increase = 1,
  Decrease = 2
}

export enum E_ContractActionType {
  ContractCreated = 100,
  ContractUpdated = 101,
  ContractDeleted = 102,
  ContractAttachmentAdded = 200,
  ContractAttachmentUpdated = 201,
  ContractAttachmentDeleted = 202,
  ContractAttachmentDownloaded = 203,
  ContractImageAdded = 300,
  ContractImageDownloaded = 301,
  ContractPaymentAdded = 400,
  ContractPaymentUpdated = 401,
  ContractAccountCombinationUpdated = 500,
  ContractMonitorsUpdated = 600,
  ContractPartiesUpdated = 700,
  ContractDeliveriesSchedulesAdded = 800,
  ContractDeliveriesSchedulesUpdated = 801,
  ContractDeliveriesSchedulesDeleted = 802,
  ContractPenaltiesAdded = 900,
  ContractPenaltiesUpdated = 901,
  ContractPenaltiesDeleted = 902,
  ContractItemsAdded = 1000,
  ContractItemsUpdated = 1001,
  ContractItemsDeleted = 1002,
  ContractInvoiceAdded = 1100,
  ContractInvoiceUpdated = 1101,
  ContractInvoiceDeleted = 1102
}

export enum E_BudgetActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5
}

export enum E_BudgetActionStatus {
  Success = 1,
  Failure = 2,
  Error = 3
}

export enum E_BudgetSectionsEnum {
  SubAgency = 1,
  Unit = 2,
  Function = 3,
  Program = 4,
  Location = 5,
  Account = 6
}

export enum E_GuaranteeStatus {
  Running = 1,
  NotRunning = 2
}

export enum E_EntityActionType {
  Create = 0,
  Update = 1,
  Delete = 2,
  Open = 3,
  Close = 4
}

export enum E_AccountActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5
}

export enum E_AccountActionStatus {
  Success = 1,
  Faluire = 2,
  Error = 3
}

export enum E_AccountCombinationActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5
}

export enum E_AccountCombinationActionStatus {
  Success = 1,
  Failure = 2,
  Error = 3
}

