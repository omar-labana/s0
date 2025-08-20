/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum AccountCombinationActionStatus {
  Success = 1,
  Failure = 2,
  Error = 3,
}

export enum AccountCombinationActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5,
}

export enum AccountActionStatus {
  Success = 1,
  Faluire = 2,
  Error = 3,
}

export enum AccountActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5,
}

export enum EntityActionType {
  Create = 0,
  Update = 1,
  Delete = 2,
  Open = 3,
  Close = 4,
}

export enum GuaranteeStatus {
  Running = 1,
  NotRunning = 2,
}

export enum BudgetSectionsEnum {
  SubAgency = 1,
  Unit = 2,
  Function = 3,
  Program = 4,
  Location = 5,
  Account = 6,
}

export enum BudgetActionStatus {
  Success = 1,
  Failure = 2,
  Error = 3,
}

export enum BudgetActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5,
}

export enum ContractActionType {
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
  ContractInvoiceDeleted = 1102,
}

export enum ChangeOrderType {
  Increase = 1,
  Decrease = 2,
}

export enum InvitationEntityType {
  Meeting = 1,
}

export enum InvitationStatus {
  Pending = 1,
  Accepted = 2,
  Rejected = 3,
  Expired = 4,
}

export enum StrategyObjectiveEquationTagType {
  Number = 0,
  Variable = 1,
  Operator = 2,
}

export enum MeetingDecisionStatus {
  Approved = 1,
  Rejected = 2,
  NotReplied = 3,
}

export enum MeetingDiscussionType {
  People = 1,
  General = 2,
}

export enum ProgramLevel {
  Main = 1,
  Sub = 2,
  Project = 3,
}

export enum ProjectIssueState {
  New = 1,
  InProgress = 2,
  Resolved = 3,
  Closed = 4,
}

export enum AppUserSource {
  Portal = 0,
  Entra = 1,
}

export enum SystemApplications {
  Tendering = 1,
  Budgeting = 2,
  Contracts = 3,
  Strategies = 4,
}

export enum ContractRequestStatus {
  Extension = 1,
  Renewal = 2,
  NewContract = 3,
}

export enum TaskAssignmentRelations {
  FinishToStart = 1,
  FinishToFinish = 2,
  StartToStart = 3,
  StartToFinish = 4,
}

export enum TaskAssignmentCategoryTypes {
  Meeting = 1,
  Task = 2,
  Tender = 3,
  Attachment = 4,
  RequestToAnswerQuestion = 5,
  Invoice = 6,
  Contract = 7,
  Project = 8,
}

export enum AttachmentCategoryTypes {
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
  StrategyObjective = 20,
}

export enum ContractMonitorType {
  Monitor = 1,
  CanModify = 2,
  CanRead = 3,
}

export enum ContractCategoryCodes {
  SupplyInstallOperateMaintainDevices = 1,
  SupplyGoods = 2,
}

export enum ContractSubCategoryCodes {
  SupplyInstallOperateMaintainDevicesTender = 1,
  SupplyInstallOperateMaintainDevicesProcurement = 2,
  SupplyInstallOperateMaintainDevicesDirectContract = 3,
  SupplyGoodsTender = 4,
  SupplyGoodsProcurement = 5,
  SupplyGoodsDirectContract = 6,
}

export enum GoalType {
  Quantitative = 1,
  Qualitative = 2,
}

export enum KpiCategory {
  Quantitative = 1,
  Qualitative = 2,
}

export enum KpiPolarity {
  Positive = 1,
  Negative = 2,
}

export enum InitiativeDeliverableStatus {
  NotDelivered = 1,
  InProgress = 2,
  Delivered = 3,
  Delayed = 4,
  Cancelled = 5,
}

export enum InitiativeMilestoneStatus {
  NotStarted = 1,
  InProgress = 2,
  Completed = 3,
  Delayed = 4,
  Cancelled = 5,
}

export enum InitiativePriority {
  High = 1,
  Medium = 2,
  Low = 3,
}

export enum InitiativeStatus {
  NotStarted = 1,
  InProgress = 2,
  Completed = 4,
}

export enum ProjectSubTypes {
  Constructional = 1,
  Upgrading = 2,
  Service = 3,
}

export enum ProjectTypes {
  Developmental = 1,
  Operational = 2,
  WithinAGovernmentWorkProgram = 3,
}

export enum ProjectStatus {
  NotStarted = 1,
  InProgress = 2,
  Completed = 4,
}

export enum MeetingTypes {
  Meeting = 1,
  Preliminary = 2,
}

export enum MeetingMethods {
  Online = 0,
  OnSite = 1,
}

export enum MeetingStatus {
  Upcoming = 1,
  Completed = 2,
  Cancelled = 3,
  Finished = 4,
}

export enum TenderStatusEnum {
  New = 1,
  Finished = 2,
  Reopened = 3,
  Suspend = 4,
  Cancelled = 5,
  Rejected = 6,
}

export enum WorkPlanItemFinancialYearStatusCodes {
  New = 1,
  InProgress = 2,
  Completed = 3,
  Cancelled = 4,
}

export enum ContractTypeCodes {
  New = 1,
  Extend = 2,
  Renewal = 3,
}

export enum TenderTypeCodes {
  Tender = 1,
  Procurement = 2,
  DirectContract = 3,
  PurchaseOrder = 4,
}

export enum AccountType {
  Guidance = 1,
  Chapter = 2,
  Group = 3,
  Category = 4,
  Item = 5,
  Type = 6,
}

export enum ContractStatus {
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
  RequiresFinancialApproval = 12,
}

export enum ContractType {
  Tender = 1,
  Practice = 2,
  DirectContract = 3,
}

export enum KpiUnitType {
  Percentage = 1,
  Number = 2,
  Space = 3,
  Currency = 4,
  Time = 5,
  Lenght = 6,
  Volume = 7,
}

export enum MeasurementCycle {
  Monthly = 1,
  Quarterly = 2,
  Yearly = 3,
}

export enum ProgressIndicator {
  Green = 1,
  Yellow = 2,
  Red = 3,
}

export enum BalancedScorecardPerspectiveCodes {
  Financial = 1,
  Customer = 2,
  InternalProcesses = 3,
  LearningAndGrowth = 4,
}

export enum StrategyObjectiveStepIndicator {
  InitialData = 1,
  StackHolders = 2,
  KPIs = 3,
  Projects = 4,
}

export enum StrategyObjectiveStatus {
  OnTime = 1,
  Late = 2,
  Achieved = 3,
}

export enum SubAgencyActionStatus {
  Success = 1,
  Faluire = 2,
  Error = 3,
}

export enum SubAgencyActionCode {
  Add = 1,
  Update = 2,
  Delete = 3,
  Open = 4,
  Close = 5,
}

export enum TaskAssignmentStatusTypes {
  New = 1,
  Completed = 2,
  InProgress = 3,
  Late = 4,
}

export enum TaskTypeEnum {
  General = 1,
  Approval = 2,
  CreateTender = 3,
  CompleteTenderInfo = 4,
  CancelTender = 5,
  Review = 6,
}

export enum ValidationSeverity {
  Error = 0,
  Warning = 1,
  Info = 2,
}

export enum ResultStatus {
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
  Unavailable = 10,
}

export enum TenderPhaseTypeEnum {
  Planning = 1,
  Preparation = 2,
  Approvals = 3,
  Announcement = 4,
  Awarding = 5,
  Contracting = 6,
}

export enum ImplementationType {
  Specific = 1,
  Custom = 2,
}

export enum NegotiateMethod {
  WithAllOffersRepresenters = 1,
  WithLowestOfferRepresenter = 2,
}

export enum SmaplesNeed {
  NeedSamples = 1,
  NoNeedSamples = 2,
}

export enum Alternativity {
  AllowedAlternativeOffers = 1,
  NotAllowedAlternativeOffers = 2,
}

export enum TenderEvaluationMethod {
  ScorePoint = 1,
  Price = 2,
}

export enum TenderOfferMethod {
  FinTechOffer = 1,
  FinancialOffer = 2,
}

export enum TenderAccessType {
  Internal = 1,
  External = 2,
}

export enum Divisibility {
  Divisible = 1,
  NonDivisible = 2,
}

export enum TenderScope {
  General = 1,
  Limited = 2,
}

export enum TenderInqueryTypes {
  Question = 1,
  Complaint = 2,
}

export enum DurationTypeCodes {
  Day = 1,
  Month = 2,
  Year = 3,
}

export enum MeetingAttendeeStatusCodes {
  New = 1,
  Present = 2,
  Absent = 3,
}

export enum StrategyManagementActionTypeCode {
  StrategyObjectives = 1,
  Project = 2,
}

export enum SortDirection {
  Descending = 1,
  Ascending = 2,
}

export type GetProjectChartsRequest = object;

export type GetAllInternalOrganizationsQuery = object;

export interface UpdateInternalOrganizationCommand {
  titleAr?: string;
  titleEn?: string;
}

export type GetChartsRequest = object;

export type DeleteProjectPillarRequest = object;

export interface UpdateProjectServiceRequest {
  /** @format int32 */
  projectId?: number | null;
  name?: string | null;
}

export interface StockTakingDto {
  /** @format int32 */
  id?: number;
  /** @format date-time */
  stockTakingDate?: string | null;
  /** @format int32 */
  inventoryId?: number;
  inventoryName?: string;
  /** @format int32 */
  doneById?: number | null;
  doneByName?: string | null;
  canBeDeleted?: boolean;
}

export interface ProblemDetails {
  type?: string | null;
  title?: string | null;
  /** @format int32 */
  status?: number | null;
  detail?: string | null;
  instance?: string | null;
  [key: string]: any;
}

export type ListStockTakingsRequest = object;

export interface PagedListOfStockTakingDto {
  data?: StockTakingDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedStockTakingsRequest = PagedBaseRequest & object;

export type PagedBaseRequest = object;

export interface TableOrder {
  columnName?: string | null;
  sortDirection?: SortDirection | null;
}

export type GetStrategyBudgetItemsGroupedByYearRequest = object;

export interface CreateStrategyManagementActionRequest {
  /**
   * @minLength 3
   * @maxLength 200
   */
  name: string;
  /**
   * @format date-time
   * @minLength 1
   */
  date: string;
  /**
   * @minLength 0
   * @maxLength 1500
   */
  description?: string | null;
  code: StrategyManagementActionTypeCode;
}

export interface CreateStrategyObjectiveActionRequest {
  /** @format int32 */
  strategyActionTypeId?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  name?: string;
  description?: string;
  /** @format date-time */
  date?: string;
}

export type DeleteStrategyObjectiveActionRequest = object;

export interface GetAllStrategyObjectiveActionDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyActionTypeId?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  name?: string;
  description?: string;
  /** @format date-time */
  date?: string;
  hasAttachments?: boolean;
}

export type GetAllStrategyObjectiveActionsRequest = object;

export interface PagedListOfPagedStrategyObjectiveActionDto {
  data?: PagedStrategyObjectiveActionDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PagedStrategyObjectiveActionDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyActionTypeId?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  name?: string;
  description?: string;
  /** @format date-time */
  date?: string;
  canBeDeleted?: boolean;
  hasAttachments?: boolean;
}

export type PagedStrategyObjectiveActionsRequest = object;

export interface CreateStrategyObjectiveProjectRiskRequest {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  mitigationPlan: string;
  /** @format int32 */
  projectId: number;
}

export interface StrategyObjectiveProjectRiskDto {
  /** @format int32 */
  id?: number;
  title?: string;
  description?: string;
  mitigationPlan?: string;
  /** @format int32 */
  projectId?: number;
}

export type GetByIdRequest = object;

export interface PagedListOfStrategyObjectiveProjectRiskDto {
  data?: StrategyObjectiveProjectRiskDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedStrategyObjectiveProjectRisksRequest = PagedBaseRequest &
  object;

export interface UpdateRequest {
  /**
   * @minLength 0
   * @maxLength 200
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  mitigationPlan: string;
}

export interface RecordMeetingProceedingsRequest {
  /** @format int32 */
  id: number;
  /**
   * @format date-time
   * @minLength 1
   */
  actualStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  actualEndDate: string;
  attendees: MeetingAttendeeUpdateRequest[];
}

export interface MeetingAttendeeUpdateRequest {
  /** @format int32 */
  userId: number;
  status: MeetingAttendeeStatusCodes;
}

export interface UpdateTenderAdminRequest {
  /** @format int32 */
  tenderAdminId?: number;
  /** @format int32 */
  workPlanItemIdFinanceYear?: number;
}

export interface UpdateWorkPlanItemRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /** @maxLength 500 */
  notes?: string | null;
  /** @maxLength 100 */
  contractNo?: string | null;
  /** @format int32 */
  tenderTypeId: number;
  /** @format int32 */
  requesterOrgUnitId: number;
  /** @format int32 */
  supervisorOrgUnitId: number;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /** @format double */
  totalEstimatedBudget: number;
  /** @format double */
  yearEstimatedBudget: number;
  isOutPlan?: boolean;
  /** @format int32 */
  durationValue: number;
  /** @format int32 */
  durationTypeId: number;
  /** @format int32 */
  financialYearId: number;
  /** @format int32 */
  contractTypeId: number;
  /** @format int32 */
  tenderAdminId: number;
}

export type PagedWorkPlanItemsRequest = PagedBaseRequest & object;

export type ListWorkPlanItemsRequest = object;

export type GetWorkPlanItemRequest = object;

export type FinanceCalcsWorkPlanItemsRequest = object;

export type DeleteRequest = object;

export type CreateWorkPlanItemsRequest = PagedBaseRequest & {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  tenderTypeId?: number;
  contractNo?: string | null;
  /** @format int32 */
  financialYearId?: number;
  durationTypeCode?: DurationTypeCodes;
  notes?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format double */
  totalEstimatedBudget?: number | null;
  /** @format double */
  yearEstimatedBudget?: number | null;
  isOutPlan?: boolean | null;
  isOutItDepartment?: boolean | null;
  /** @format int32 */
  durationValue?: number | null;
  /** @format int32 */
  tenderAdminId?: number | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  contractTypeId: number;
  /** @format int32 */
  requesterOrgUnitId: number;
  /** @format int32 */
  supervisorOrgUnitId: number;
};

export type PagedWorkPlanItemFinancialYearStatusesRequest = PagedBaseRequest &
  object;

export interface UpdateUserAssetRequest {
  /** @format date-time */
  receivedDate?: string;
  /** @format date-time */
  outDate?: string;
  /** @format date-time */
  returnDate?: string;
  conditionOut?: string;
  conditionReturn?: string;
  /** @format int32 */
  assetId?: number;
  /** @format int32 */
  employeeId?: number;
  otherDetails?: string | null;
}

export type PagedUserAssetsRequest = PagedBaseRequest & object;

export type GetUserAssetRequest = object;

export type DeleteUserAssetRequest = object;

export interface CreateUserAssetRequest {
  /** @format date-time */
  receivedDate?: string;
  /** @format date-time */
  outDate?: string;
  /** @format date-time */
  returnDate?: string;
  conditionOut?: string;
  conditionReturn?: string;
  /** @format int32 */
  assetId?: number;
  /** @format int32 */
  employeeId?: number;
  otherDetails?: string | null;
}

export interface UnitUpdateDto {
  /** @format int32 */
  id?: number;
  code?: string;
  name?: string;
  /** @format int32 */
  agencyId?: number;
}

export interface UpdateUnitRequest {
  code?: string | null;
  name?: string | null;
  /** @format int32 */
  agencyId?: number | null;
}

export type GetPagedUnitsRequest = object;

export interface UnitListDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetAllUnitsRequest = object;

export type SoftDeleteUnitRequest = object;

export interface CreatedUnitDto {
  /** @format int32 */
  id?: number;
  code?: string;
  name?: string;
  /** @format int32 */
  agencyId?: number;
}

export interface CreateUnitRequest {
  /**
   * @minLength 1
   * @pattern ^[0-9]{10}$
   */
  code: string;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  agencyId: number;
}

export type PagedTenderTypesRequest = PagedBaseRequest & object;

export interface ListTenderTypeDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type ListTenderTypesRequest = object;

/** @example {"attachmentId":1,"toUserId":2,"dueDate":"2025-08-27T06:29:30.4376137Z","note":"Please review this document."} */
export interface SendRFPToApproveRequest {
  /** @format int32 */
  attachmentId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

export interface RestoreSpecificationsAndTermsVersionRequest {
  /** @format int32 */
  attachmentId?: number;
  versionId?: string;
}

export type ListTenderRFPApprovalsRequest = object;

export type GetTermsAndConditionsVersionsRequest = object;

/** @example {"tenderId":123,"attachmentId":456,"fileName":"UpdatedSpecifications"} */
export interface UpdateSpecificationsAndTermsFileNameRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  attachmentId?: number;
  fileName?: string;
}

/** @example {"tenderId":123,"attachmentId":456,"webPath":"/uploads/tenders/terms"} */
export interface UpdateTermsAndConditionsWebPathRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  attachmentId?: number;
  /** @minLength 1 */
  webPath: string;
}

export interface UpdateTermsAndConditionsFileRequest {
  /** @format int32 */
  tenderId: number;
  /** @format int32 */
  attachmentId: number;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export type PagedSpecificationsAndTermsRequest = PagedBaseRequest & object;

export type DownloadSpecificationsAndTermsFileRequest = object;

/** @example {"tenderId":123,"attachmentId":999} */
export interface DeleteSpecificationsAndTermsRequest {
  /** @format int32 */
  tenderId: number;
  /** @format int32 */
  attachmentId: number;
}

/** @example {"tenderId":123,"fileDesc":"Description of the file","fileName":"TermsAndConditions.pdf","physicalFile":null,"webPath":"/uploads/tenders/terms"} */
export interface AddSpecificationsAndTermsRequest {
  /** @format int32 */
  tenderId?: number;
  /** @minLength 1 */
  fileDesc: string;
  /** @minLength 1 */
  fileName: string;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export interface UpdateTenderPhaseRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sortOrder: number;
}

export interface PagedListOfListTenderPhaseEntity {
  data?: ListTenderPhaseEntity[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type ListTenderPhaseEntity = BasePagedDto & {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  code?: number;
  name?: string;
  /** @format int32 */
  sortedOrder?: number;
};

export interface BasePagedDto {
  canBeDeleted?: boolean;
}

export type PagedTenderPhasesRequest = object;

export type ListTenderPhasesRequest = object;

export interface GetTenderPhaseDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  sortOrder?: number;
}

export type GetTenderPhaseRequest = object;

export interface CreateTenderPhaseRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sortOrder: number;
}

export interface UpdateTenderPhaseDefinitionRequest {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationInDays: number;
}

export type PagedTenderPhaseDefinitionsRequest = PagedBaseRequest & object;

export type ListTenderPhaseDefinitionsRequest = object;

export type DeleteTenderPhaseDefinitionRequest = object;

export interface CreateTenderPhaseDefinitionRequest {
  /** @format int32 */
  tenderPhaseId: number;
  /** @format int32 */
  tenderTypeId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationInDays: number;
}

export type PagedTenderMilestonesByTenderRequest = PagedBaseRequest & object;

export interface UpdateTenderMeetingTopicRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  title?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationInMins?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sequenceOrder?: number | null;
}

export type PagedTenderMeetingTopicsRequest = PagedBaseRequest & object;

export type DeleteTenderMeetingTopicRequest = object;

export interface CreateTenderMeetingTopicRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  title: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  meetingId: number;
  description?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationInMins?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sequenceOrder?: number;
}

export type ExportTenderInqueriesByFileRequest = object;

export type PagedTenderInqueryByFilesRequest = PagedBaseRequest & object;

export type DownloadTenderInqueryByFileRequest = object;

export interface CreateTenderInqueryByFileRequest {
  /** @format int32 */
  tenderId: number;
  /** @format int32 */
  companyId: number;
  /**
   * @format date-time
   * @minLength 1
   */
  receivingDate: string;
  /** @format int32 */
  questionsReceivingTypeId: number;
  tenderInqueryType: TenderInqueryTypes;
  fileName?: string | null;
  fileDesc?: string | null;
  /** @format int32 */
  attachmentTypeId?: number | null;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export interface UpdateTenderInqueryQuestionRequest {
  /** @format int32 */
  companyId?: number;
  /** @minLength 1 */
  question: string;
}

export interface UpdateTenderInqueryAnswerRequest {
  /** @minLength 1 */
  answer: string;
}

export type PagedTenderInqueriesByTenderRequest = PagedBaseRequest & object;

export type ExportTenderInqueriesByTenderRequest = object;

export type ExportTenderInqueriesByTenderRequest2 = object;

export type DeleteTenderInqueryRequest = object;

export interface CreateTenderInqueryRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  companyId?: number;
  question?: string;
}

export interface RequestTenderInqueryAnswerRequest {
  /** @format int32 */
  tenderInqueryId?: number;
  /** @format int32 */
  assignedUserId?: number;
}

export interface UpdateTenderEvaluationRequest {
  /**
   * @minLength 0
   * @maxLength 500
   */
  name?: string | null;
  /**
   * @format int32
   * @min 0
   * @max 5
   */
  importanceScore?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 5
   */
  proposalScore?: number | null;
  /**
   * @format double
   * @min 0
   * @exclusiveMin true
   * @max 100
   */
  weight?: number | null;
}

export interface ErrorResponse {
  /**
   * @format int32
   * @default 400
   */
  statusCode?: number;
  /** @default "One or more errors occurred!" */
  message?: string;
  errors?: Record<string, string[]>;
}

export interface TenderEvaluationDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  tenderId?: number;
  tenderName?: string;
  /** @format int32 */
  parentId?: number | null;
  parentName?: string | null;
  name?: string;
  /** @format int32 */
  importanceScore?: number;
  /** @format int32 */
  proposalScore?: number;
  /** @format double */
  weight?: number;
  /** @format double */
  totalPoints?: number;
  children?: TenderEvaluationDto[] | null;
}

export type GetPagedTenderEvaluationsRequest = object;

export type ExportTenderEvaluationsByFileRequest = object;

export type DeleteTenderEvaluationRequest = object;

export interface CreateTenderEvaluationRequest {
  /** @format int32 */
  tenderId: number;
  /** @format int32 */
  parentId?: number | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  name: string;
  /**
   * @format int32
   * @min 0
   * @max 5
   */
  importanceScore?: number;
  /**
   * @format int32
   * @min 0
   * @max 5
   */
  proposalScore?: number;
  /**
   * @format double
   * @min 0
   * @exclusiveMin true
   * @max 100
   */
  weight: number;
}

/** @example {"tenderId":123,"attachmentId":456,"webPath":"/uploads/tenders/document-file"} */
export interface UpdateDocumentFileWebPathRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  attachmentId?: number;
  /** @minLength 1 */
  webPath: string;
}

/** @example {"attachmentId":456,"fileName":"UpdatedDocument"} */
export interface UpdateDocumentFileNameRequest {
  /** @format int32 */
  attachmentId: number;
  /** @minLength 1 */
  fileName: string;
}

export interface UpdateDocumentFileRequest {
  /** @format int32 */
  tenderId: number;
  /** @format int32 */
  attachmentId: number;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

/** @example {"attachmentId":1,"toUserId":2,"dueDate":"2025-08-27T06:29:30.4960112Z","note":"Please review this document."} */
export interface SendDocumentToApproveRequest {
  /** @format int32 */
  attachmentId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

export interface RestoreDocumentVersionRequest {
  /** @format int32 */
  attachmentId?: number;
  versionId?: string;
}

export type PagedDocumentFileRequest = PagedBaseRequest & object;

export type ListDocumentApprovalsRequest = object;

export type GetDocumentFileVersionsRequest = object;

export type DownloadDocumentFileRequest = object;

/** @example {"tenderId":123,"attachmentId":456} */
export interface DeleteDocumentRequest {
  /** @format int32 */
  tenderId: number;
  /** @format int32 */
  attachmentId: number;
}

/** @example {"tenderId":123,"fileName":"Document.pdf","attachmentTypeId":0,"fileDesc":"Document description","physicalFile":null,"webPath":"/uploads/tenders/documents"} */
export interface AddDocumentRequest {
  /** @format int32 */
  tenderId?: number;
  /** @minLength 1 */
  fileName: string;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @minLength 1 */
  fileDesc: string;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export type GetCorrespondenceAttachmentsRequest = object;

export interface UpdateTenderComponantRequest {
  nameAr?: string | null;
  nameEn?: string | null;
  description?: string | null;
}

export type GetTenderComponentTreeRequest = object;

export interface DeleteTenderComponentItemRequest {
  /** @format int32 */
  id?: number;
}

export interface AddParentRequest {
  nameAr?: string;
  nameEn?: string;
  description?: string | null;
}

export interface AddChildRequest {
  /** @format int32 */
  parentId?: number;
  nameAr?: string;
  nameEn?: string;
  description?: string | null;
}

export interface UpdateFirstStepRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
  description?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderCategoryId?: number;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /** @minLength 1 */
  componentsIds: number[];
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderPhaseCode?: number;
}

export interface UpdateTenderRequest {
  description?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderPhaseId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderCategoryId?: number;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /** @minLength 1 */
  componentsIds: number[];
  scope?: TenderScope;
  divisibility?: Divisibility;
  tenderAccessType?: TenderAccessType;
  tenderOfferMethod?: TenderOfferMethod;
  tenderEvaluationMethod?: TenderEvaluationMethod;
  alternativity?: Alternativity;
  smaplesNeed?: SmaplesNeed;
  negotiateMethod?: NegotiateMethod;
  tenderPhases?: TenderPlannedPhaseItem[];
  /** @format date-time */
  introductoryMeetingDate?: string;
  /**
   * @format date-time
   * @minLength 1
   */
  recivingQuestionsDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  sendingAnswersDate: string;
  requiredTraining?: RequiredTraining | null;
  relatedContract?: RelatedContract | null;
  implementationDetails?: string | null;
  implementationData?: ImplementationData | null;
  tenderImplementationPlanItem?: TenderImplementationPlanItem[];
  paymentDetails?: string | null;
  isSpecificOrCustom?: ImplementationType | null;
}

export interface TenderPlannedPhaseItem {
  /** @format int32 */
  tenderPhaseId?: number;
  /** @format date-time */
  plannedStartDate?: string;
  /** @format date-time */
  plannedEndDate?: string;
}

export interface RequiredTraining {
  isTrainingRequired?: boolean;
  /** @format int32 */
  numberOfEmployee?: number;
  trainingInformatin?: string;
}

export interface RelatedContract {
  isRelatedToContract?: boolean;
  contractNumber?: string;
  contractName?: string;
  /** @format int32 */
  contractRelationType?: number;
}

export interface ImplementationData {
  implementSite?: string;
  warrantyDuration?: DurationItem;
  /** @format date-time */
  recievingSpecificationsAndTermsEndDate?: string;
}

export interface DurationItem {
  /** @format int32 */
  durationValue?: number;
  /** @format int32 */
  durationTypeId?: number;
}

export interface TenderImplementationPlanItem {
  /** @format int32 */
  tenderPhaseId?: number;
  duration?: DurationItem;
}

export interface CreateTenderFirstStepRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  workPlanItemId?: number;
  description?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderCategoryId?: number;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /** @minLength 1 */
  componentsIds: number[];
  /** @format int32 */
  tenderPhaseCode?: number;
}

export interface ManageTenderFourthStepRequest {
  /**
   * @format int32
   * @minLength 1
   */
  tenderId: number;
  relatedContract?: RelatedContract2 | null;
  requiredTraining?: RequiredTraining2 | null;
  implementationDetails?: string | null;
  implementationData?: ImplementationData2 | null;
  tenderImplementationPlanItem?: TenderImplementationPlanItem2[];
  paymentDetails?: string | null;
  isSpecificOrCustom?: ImplementationType | null;
}

export interface RelatedContract2 {
  isRelatedToContract?: boolean;
  contractNumber?: string;
  contractName?: string;
  /** @format int32 */
  contractRelationType?: number;
}

export interface RequiredTraining2 {
  isTrainingRequired?: boolean;
  /** @format int32 */
  numberOfEmployee?: number;
  trainingInformatin?: string;
}

export interface ImplementationData2 {
  implementSite?: string;
  warrantyDuration?: DurationItem2;
  /** @format date-time */
  recievingSpecificationsAndTermsEndDate?: string;
}

export interface DurationItem2 {
  /** @format int32 */
  durationValue?: number;
  /** @format int32 */
  durationTypeId?: number;
}

export interface TenderImplementationPlanItem2 {
  /** @format int32 */
  tenderPhaseId?: number;
  duration?: DurationItem2;
}

export interface ManageTenderSecondStepRequest {
  /**
   * @format int32
   * @minLength 1
   */
  tenderId: number;
  scope?: TenderScope;
  divisibility?: Divisibility;
  tenderAccessType?: TenderAccessType;
  tenderOfferMethod?: TenderOfferMethod;
  tenderEvaluationMethod?: TenderEvaluationMethod;
  alternativity?: Alternativity;
  smaplesNeed?: SmaplesNeed;
  negotiateMethod?: NegotiateMethod;
}

export interface ManageTenderThirdStepRequest {
  /**
   * @format int32
   * @minLength 1
   */
  tenderId: number;
  tenderPhases?: TenderPlannedPhaseItem2[];
  /** @format date-time */
  introductoryMeetingDate?: string;
  /**
   * @format date-time
   * @minLength 1
   */
  recivingQuestionsDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  sendingAnswersDate: string;
}

export interface TenderPlannedPhaseItem2 {
  /** @format int32 */
  tenderPhaseId?: number;
  /** @format date-time */
  plannedStartDate?: string;
  /** @format date-time */
  plannedEndDate?: string;
}

export interface SendToCompleteInfoTenderRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

export type PagedTendersRequest = PagedBaseRequest & object;

export interface MoveToRewardingRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
}

export interface MoveToPreparationRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
}

export interface MoveToContractingRequest {
  /** @format int32 */
  id?: number;
}

export interface MoveToApprovalsRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
}

export interface MoveToAnnouncementRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
}

export type ListTendersRequest = object;

export type GetTenderRequest = object;

export type DeleteTenderRequest = object;

export interface CreateTenderRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  workPlanItemId?: number;
  tenderNumber?: string;
  titleEn?: string;
  titleAr?: string;
  description?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderPhaseId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderCategoryId?: number;
  /** @format int32 */
  requesterOrgUnitId?: number;
  /** @format int32 */
  supervisorOrgUnitId?: number;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /** @minLength 1 */
  componentsIds: number[];
  scope?: TenderScope;
  divisibility?: Divisibility;
  tenderAccessType?: TenderAccessType;
  tenderOfferMethod?: TenderOfferMethod;
  tenderEvaluationMethod?: TenderEvaluationMethod;
  alternativity?: Alternativity;
  smaplesNeed?: SmaplesNeed;
  negotiateMethod?: NegotiateMethod;
  tenderPhases?: TenderPlannedPhaseItem2[];
  /** @format date-time */
  introductoryMeetingDate?: string;
  /**
   * @format date-time
   * @minLength 1
   */
  recivingQuestionsDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  sendingAnswersDate: string;
  requiredTraining?: RequiredTraining2 | null;
  relatedContract?: RelatedContract2 | null;
  implementationDetails?: string | null;
  implementationData?: ImplementationData2 | null;
  tenderImplementationPlanItem?: TenderImplementationPlanItem2[];
  paymentDetails?: string | null;
  isSpecificOrCustom?: ImplementationType | null;
}

export interface CompleteTenderInfoRequest {
  penalties?: string | null;
  description?: string | null;
  tenderImportatnceNeed?: string | null;
  nameEn?: string;
}

/** @example {"attachmentId":456,"fileName":"UpdatedCompanyOfferFile"} */
export interface UpdateCompanyOfferFileNameRequest {
  /** @format int32 */
  attachmentId: number;
  /** @minLength 1 */
  fileName: string;
}

export interface UpdateCompanyOfferFileRequest {
  /** @format int32 */
  companyOfferId: number;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export type PagedCompanyOffersRequest = PagedRequest & object;

export type PagedRequest = PagedBaseRequest & object;

export type PagedCompanyOfferFileRequest = PagedBaseRequest & object;

export type GetCompanyOfferRequest = object;

export type ExportPagedCompanyOffersToExcelRequest = object;

export type DownloadCompanyOfferFileRequest = object;

export type DeleteCompanyOfferFileRequest = object;

export type DeleteCompanyOfferRequest = object;

export interface CreateCompanyOfferRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  currencyId?: number;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  durationTypeId?: number;
  /** @format decimal */
  totalPrice?: number;
}

export interface AddCompanyOfferFileRequest {
  /** @format int32 */
  companyOfferId?: number;
  fileName?: string;
  fileDesc?: string;
  /** @format int32 */
  attachmentTypeId?: number;
  webPath?: string | null;
  /** @format binary */
  physicalFile?: File | null;
}

export interface ResultOfPagedListOfTenderCommitteeParticipationPagedDTO {
  value?: PagedListOfTenderCommitteeParticipationPagedDTO | null;
  status?: ResultStatus;
  isSuccess?: boolean;
  successMessage?: string | null;
  correlationId?: string | null;
  location?: string | null;
  errors?: string[] | null;
  validationErrors?: ValidationError[] | null;
}

export interface PagedListOfTenderCommitteeParticipationPagedDTO {
  data?: TenderCommitteeParticipationPagedDTO[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type TenderCommitteeParticipationPagedDTO = BasePagedDto & {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  committeeId?: number;
  committeeName?: string;
  committeeTypeName?: string;
  committeeDescription?: string | null;
  committeeIsActive?: boolean;
  /** @format date-time */
  committeeStartDate?: string | null;
  /** @format date-time */
  committeeEndDate?: string | null;
  /** @format date-time */
  creationTime?: string;
  committeeChairmanName?: string;
  committeeChairmanJobTitle?: string;
  committeeChairmanPhotoUrl?: string | null;
};

export interface ValidationError {
  identifier?: string | null;
  errorMessage?: string | null;
  errorCode?: string | null;
  severity?: ValidationSeverity;
}

export type PagedTenderCommitteeParticipationsRequest = PagedBaseRequest &
  object;

export interface AvailableCommitteeForTenderDTO {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  tenderId?: number;
}

export type GetAvailableCommitteesForTenderRequest = object;

export interface TenderCommitteeParticipationDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  committeeId?: number;
  committeeName?: string;
  committeeTypeName?: string;
  committeeDescription?: string | null;
  committeeIsActive?: boolean;
  /** @format date-time */
  committeeStartDate?: string | null;
  /** @format date-time */
  committeeEndDate?: string | null;
  /** @format date-time */
  creationTime?: string;
}

export type GetTenderCommitteesRequest = object;

export type HttpValidationProblemDetails = ProblemDetails & {
  errors?: Record<string, string[]>;
  [key: string]: any;
};

export type DeleteTenderCommitteeParticipationRequest = object;

export interface CreateTenderCommitteeParticipationRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  committeeId?: number;
}

export type UsersRequest = object;

export type PagedTenderCommitteeMembersRequest = PagedBaseRequest & object;

export type GetAllTenderCommitteeMembersRequest = object;

export interface AddTenderCommitteeMemberRequest {
  /** @format int32 */
  tenderCommitteeId?: number;
  /** @format int32 */
  appUserId?: number;
  /** @format int32 */
  committeeMemberRole?: number;
}

export interface UpdateTenderCategoryRequest {
  /** @maxLength 200 */
  nameAr?: string | null;
  /** @maxLength 200 */
  nameEn?: string | null;
}

export interface PagedListOfPagedTenderCategoryEntity {
  data?: PagedTenderCategoryEntity[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedTenderCategoryEntity = BasePagedDto & {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
};

export type PagedTenderCategoriesRequest = object;

export type ListTenderCategoriesRequest = object;

export interface ListTenderCategoryEntity {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
}

export type GetTenderCategoryRequest = object;

export type DeleteTenderCategoryRequest = object;

export interface CreateTenderCategoryRequest {
  /** @minLength 1 */
  nameAr: string;
  /** @minLength 1 */
  nameEn: string;
}

export interface UpdateTenderActionRequest {
  nameAr?: string | null;
  nameEn?: string | null;
  /** @format int32 */
  sortOrder?: number | null;
  description?: string | null;
  isSystemAction?: boolean | null;
  /** @format int32 */
  actionCode?: number | null;
}

export interface PagedListOfTenderActionDto {
  data?: TenderActionDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type TenderActionDto = BasePagedDto & {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  description?: string | null;
  isSystemAction?: boolean;
  phases?: TenderActionPhaseDto[];
};

export interface TenderActionPhaseDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  tenderPhaseId?: number | null;
  /** @format int32 */
  tenderTypeId?: number | null;
  /** @format int32 */
  targetTenderPhaseId?: number | null;
  /** @format int32 */
  dependOnActionId?: number | null;
  actionInPhase?: string;
  needsAttachment?: boolean;
  changesPhase?: boolean;
  transitionPhase?: string | null;
  /** @format int32 */
  tenderTypeBudgetCode?: number | null;
}

export type PagedTenderActionsRequest = object;

export type ListTenderActionsRequest = object;

export type TenderActionsRequest = object;

export type DeleteTenderActionRequest = object;

export interface CreateTenderActionRequest {
  /** @format int32 */
  sortOrder: number;
  /**
   * @minLength 1
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  nameEn: string;
  description?: string | null;
  isSystemAction: boolean;
  /** @format int32 */
  actionCode: number;
}

export interface UpdateTenderActionPhasesRequest {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  tenderPhaseId?: number | null;
  /** @format int32 */
  tenderTypeId?: number | null;
  isAttachmentRequired?: boolean;
  isTransitionalAction?: boolean;
  /** @format int32 */
  targetTenderPhaseId?: number | null;
  /** @format int32 */
  dependOnActionId?: number | null;
  /** @format int32 */
  tenderTypeBudgetCode?: number | null;
}

export type GetTenderActionPhaseByIdRequest = object;

export interface GetTenderActionPhaseInfoDto {
  tenderType?: string | null;
  tenderPhase?: string | null;
  isAttachmentRequired?: boolean;
  isTransitionalAction?: boolean;
  targetTenderPhase?: string | null;
  canChangePhase?: boolean;
  /** @format decimal */
  budget?: number;
}

export type GetTenderActionPhaseInfoRequest = object;

export type DeleteTenderActionPhaseRequest = object;

export interface CreateTenderActionPhaseRequest {
  /** @format int32 */
  tenderActionId?: number;
  /** @format int32 */
  tenderPhaseId?: number;
  /** @format int32 */
  tenderTypeId?: number;
  /** @format int32 */
  targetTenderPhaseId?: number | null;
  /** @format int32 */
  dependOnActionId?: number | null;
  /** @format int32 */
  tenderTypeBudgetCode?: number | null;
  isAttachmentRequired?: boolean;
  isTransitionalAction?: boolean;
  isSystemRole?: boolean;
}

/** @example {"webPath":"/uploads/tender-actions/action-file"} */
export interface UpdateWebPathRequest {
  /** @minLength 1 */
  webPath: string;
}

/** @example {"fileName":"UpdatedFileName.txt","fileDesc":"Updated file description","attachmentTypeId":1} */
export interface UpdateAttachmentDetailsRequest {
  /** @minLength 1 */
  fileName: string;
  /** @minLength 1 */
  fileDesc: string;
  /** @format int32 */
  attachmentTypeId: number;
}

export interface UpdateActionDetailFileRequest {
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface UpdateTenderActionDetailRequest {
  notes?: string | null;
  /** @format date-time */
  actionDate?: string;
  /** @format int32 */
  tenderActionId?: number;
}

export type PagedTenderActionDetailRequest = PagedBaseRequest & object;

export type GetAttachmentDetailsRequest = object;

export type GetTenderActionDetailByIdRequest = object;

export type DownloadFileRequest = object;

export type DeleteTenderActionDetailRequest = object;

export interface CreateTenderActionSendGenralTCToFatwaRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionSendAnnounceRequestToCTCRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionRequestExtendBidsDeadlineRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format date-time */
  announcementDate?: string | null;
  /** @format date-time */
  recievingOfferStartDate?: string | null;
  tenderNo?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionRequestCancelingRequest {
  createRequestCancelingDTO?: CreateTenderActionRequestCancelingDTO;
}

export interface CreateTenderActionRequestCancelingDTO {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format byte */
  fileBytes?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  extension?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format int64 */
  size?: number | null;
  contentType?: string | null;
}

export interface CreateTenderActionRequestAnnouncementRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionReceivingCompanyQuestionsRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  questionsRecivingTypeId?: number;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionReceivingCompanyComplaintsRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format int32 */
  companyId?: number;
  /** @format int32 */
  questionsRecivingTypeId?: number;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionReAnnouncementApprovalRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format date-time */
  announcementDate?: string | null;
  /** @format date-time */
  recievingOfferStartDate?: string | null;
  tenderNo?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionCorresOutgoingRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  toType?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionCorresIncomingRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  fromType?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionContractingApprovalRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format byte */
  fileBytes?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionAwardingRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format int32 */
  companyId?: number;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionAnnouncementRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  /** @format date-time */
  announcementDate?: string;
  /** @format date-time */
  recievingOfferStartDate?: string;
  tenderNo?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionRecievingFatwaChangesRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  /** @format binary */
  physicalFile?: File | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
}

export interface CreateTenderActionFatwaRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateTenderActionReceivingAuditBureauInquiriesRequest {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  tenderActionId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
  hasCorresspondance?: boolean;
  corresTitle?: string;
  corresBody?: string;
  /** @format int32 */
  corresFromId?: number;
  /** @format int32 */
  corresToId?: number;
  /** @format int32 */
  corresRelatedToId?: number | null;
  /** @format int32 */
  corresReplyingTo?: number | null;
  corresNumber?: string | null;
  /** @format date-time */
  corresIssuedDate?: string | null;
  fileName?: string | null;
  fileDesc?: string | null;
  webPath?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateFile {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  fileName?: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  attachmentTypeId: number;
  fileDesc?: string;
  /** @format binary */
  physicalFile?: File;
}

export interface CreateTenderActionDetailRequest {
  note?: string | null;
  /**
   * @format date-time
   * @minLength 1
   */
  actionDate: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderActionId: number;
  fileName?: string | null;
  /** @format int32 */
  attachmentTypeId?: number | null;
  fileDesc?: string | null;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export interface UpdateTelephoneTypeRequest {
  /** @maxLength 100 */
  nameAr?: string | null;
  /** @maxLength 100 */
  nameEn?: string | null;
}

export interface TelephoneTypeListDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
}

export type GetAllTelephoneTypesRequest = object;

export interface GetTelephoneTypeByIdDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
}

export type GetTelephoneTypeByIdRequest = object;

export type DeleteTelephoneTypeRequest = object;

export interface CreateTelephoneTypeRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
}

export interface UpdateTechGroupRequest {
  nameAr?: string | null;
  nameEn?: string | null;
  description?: string | null;
}

export interface PagedListOfTechGroupPagedDto {
  data?: TechGroupPagedDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface TechGroupPagedDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  description?: string;
  canBeDeleted?: boolean;
}

export type PagedTechGroupsRequest = PagedBaseRequest & object;

export interface TechGroupDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  description?: string;
}

export type ListTechGroupsRequest = object;

export type GetTechGroupRequest = object;

export type DeleteTechGroupRequest = object;

export interface CreateTechGroupRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @minLength 1
   * @maxLength 500
   */
  description: string;
}

export type ListTaskTypesRequest = object;

/** @example {"attachmentId":456,"webPath":"/uploads/task-assignments/terms"} */
export interface UpdateTaskAssignmentWebPathRequest {
  /** @format int32 */
  attachmentId?: number;
  /** @minLength 1 */
  webPath: string;
}

export interface UpdateTaskAssignmentFileRequest {
  /** @format int32 */
  attachmentId: number;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

/** @example {"attachmentId":456,"fileName":"UpdatedFileName","fileDesc":"UpdatedFileDesc","attachmentTypeId":1} */
export interface UpdateTaskAssignmentAttachmentRequest {
  /** @format int32 */
  attachmentId?: number;
  fileName?: string;
  fileDesc?: string;
  /** @format int32 */
  attachmentTypeId?: number;
}

export interface UpdateTaskAssignmentProgressRequest {
  /** @format int32 */
  id: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  progress: number;
}

export interface UpdateTaskAssignmentRequest {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  toUserId?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  dueDate?: string | null;
  taskTypeId?: TaskTypeEnum | null;
}

/** @example {"taskAssignmentId":1,"isApproved":true,"note":"Approved"} */
export interface RespondToRFPApprovalTaskRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  taskAssignmentId?: number;
  isApproved: boolean;
  /**
   * @minLength 0
   * @maxLength 500
   */
  note?: string | null;
}

/** @example {"taskAssignmentId":1,"isApproved":true,"note":"Approved"} */
export interface RespondToInvoiceApprovalTaskRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  taskAssignmentId?: number;
  isApproved: boolean;
  /**
   * @minLength 0
   * @maxLength 500
   */
  note?: string | null;
}

/** @example {"taskAssignmentId":1,"isApproved":true,"note":"Approved"} */
export interface RespondToDocumentApprovalTaskRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  taskAssignmentId?: number;
  isApproved: boolean;
  /**
   * @minLength 0
   * @maxLength 500
   */
  note?: string | null;
}

/** @example {"taskAssignmentId":1,"note":"Review completed"} */
export interface RespondToContractReviewTaskRequest {
  /** @format int32 */
  taskAssignmentId?: number;
  note?: string | null;
}

/** @example {"taskAssignmentId":1,"isApproved":true,"note":"Approved"} */
export interface RespondToContractApprovalTaskRequest {
  /** @format int32 */
  taskAssignmentId?: number;
  isApproved?: boolean;
  note?: string | null;
}

export interface PagedListOfPagedTaskAssignmentAttachmentEntity {
  data?: PagedTaskAssignmentAttachmentEntity[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedTaskAssignmentAttachmentEntity = BasePagedDto & {
  /** @format int32 */
  id?: number;
  fileName?: string;
  fileDesc?: string;
  attachmentType?: string | null;
  /** @format int32 */
  versionNumber?: number | null;
  /** @format date-time */
  modificationTime?: string | null;
  modifierUser?: AppUserDto | null;
  creatorUser?: AppUserDto | null;
};

export interface AppUserDto {
  /** @format int32 */
  id?: number | null;
  fullName?: string | null;
  jobTitleName?: string | null;
  mobileNumber?: string | null;
  emailAddress?: string;
  photoPath?: string | null;
}

export type PagedTaskAssignmentAttachmentsRequest = PagedBaseRequest & object;

export type PagedOthersTaskAssignmentsRequest = PagedBaseRequest & object;

export interface PagedListOfMyTaskAssignmentPagedEntity {
  data?: MyTaskAssignmentPagedEntity[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type MyTaskAssignmentPagedEntity = BasePagedDto & {
  /** @format int32 */
  id?: number;
  title?: string;
  description?: string;
  fromUser?: AppUserDto;
  toUser?: AppUserDto | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  dueDate?: string;
  /** @format int32 */
  progress?: number | null;
  status?: TaskAssignmentStatusTypes;
  /** @format date-time */
  actualEndDate?: string | null;
  taskTypeId?: TaskTypeEnum;
};

export type PagedMyTaskAssignmentsRequest = PagedBaseRequest & object;

export type ListTaskAssignmentProgressUpdatesRequest = object;

export interface HideTaskAssignmentRequest {
  /** @format int32 */
  id: number;
}

export type GetTaskAssignmentFileVersionsRequest = object;

export type GetApprovalRequestByIdRequest = object;

export type GetTaskAssignmentByIdRequest = object;

/** @example {"taskAssignmentId":123,"description":"Forwarding task assignment","toUserId":456,"dueDate":"2025-08-27T06:29:30.6017867+00:00"} */
export interface ForwardTaskAssignmentRequest {
  /** @format int32 */
  taskAssignmentId: number;
  /** @minLength 1 */
  description: string;
  /** @format int32 */
  toUserId: number;
  /**
   * @format date-time
   * @minLength 1
   */
  dueDate: string;
}

export type DownloadTaskAssignmentFileRequest = object;

/** @example {"attachmentId":456} */
export interface DeleteTaskAssignmentFileRequest {
  /** @format int32 */
  attachmentId: number;
}

export type DeleteTaskAssignmentRequest = object;

export interface CreateTaskAssignmentRequest {
  title?: string;
  description?: string;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  dueDate?: string;
  taskTypeId?: TaskTypeEnum;
}

export interface CompleteTaskAssignmentRequest {
  /** @format int32 */
  id: number;
}

/** @example {"taskAssignmentId":123,"attachmentTypeId":0,"fileDesc":"Description of the file","fileName":"TaskAssignment.pdf","physicalFile":null,"webPath":"/uploads/task-assignments/attachments"} */
export interface AddTaskAssignmentAttachmentRequest {
  /** @format int32 */
  taskAssignmentId: number;
  /** @format int32 */
  attachmentTypeId: number;
  /** @minLength 1 */
  fileDesc: string;
  /** @minLength 1 */
  fileName: string;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export type PagedTaskAssignmentNotesRequest = PagedBaseRequest & object;

export type PagedTaskAssignmentActionsRequest = PagedBaseRequest & object;

/** @example {"taskAssignmentId":456,"note":"This is a new note."} */
export interface AddNoteRequest {
  /** @format int32 */
  taskAssignmentId: number;
  /** @minLength 1 */
  note: string;
}

export interface UpdateTagsRequest {
  name?: string;
}

export type PagedTagsRequest = PagedBaseRequest & object;

export type PagedTenderCorrespondencesByTenderRequest = PagedBaseRequest &
  object;

export type GetTagRequest = object;

export interface CreateTagRequest {
  name?: string;
}

/** @example {"enableSms":true,"enableEmails":true,"enableWhatsapp":true,"enableWeb":true,"enableMobile":true} */
export interface UpdateSystemNotificationSettingRequest {
  enableSms?: boolean | null;
  enableEmails?: boolean | null;
  enableWhatsapp?: boolean | null;
  enableWeb?: boolean | null;
  enableMobile?: boolean | null;
}

export interface UpdatedSubAgencyDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface UpdateSubAgencyRequest {
  /** @maxLength 100 */
  name?: string;
}

export interface PagedListOfSubAgencyHistoryResponseDto {
  data?: SubAgencyHistoryResponseDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface SubAgencyHistoryResponseDto {
  /** @format int32 */
  id?: number;
  subAgencyName?: string;
  subAgencyCode?: string;
  actionCode?: SubAgencyActionCode;
  status?: SubAgencyActionStatus;
  description?: string;
  error?: string | null;
  creationUserName?: string;
  /** @format date-time */
  creationDate?: string;
}

export type GetPagedSubAgencyHistoriesRequest = PagedBaseRequest & object;

export interface PagedListOfSubAgencyResponseDto {
  data?: SubAgencyResponseDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface SubAgencyResponseDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
  agencyName?: string;
  creationUserName?: string;
  /** @format date-time */
  creationDate?: string;
  isOpen?: boolean;
  isChanged?: boolean;
  canBeDeleted?: boolean;
}

export type PagedSubAgenciesRequest = PagedBaseRequest & object;

export interface SubAgencyListDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetAllSubAgenciesRequest = object;

export type DeleteSubAgencyRequest = object;

export interface DeactivateSubAgencyRequest {
  /** @format int32 */
  id: number;
}

export interface CreatedSubAgencyDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  parentId?: number;
}

export interface CreateSubAgencyRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
}

export interface ActivateSubAgencyRequest {
  /** @format int32 */
  id: number;
}

export interface StrategyProgramDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest = object;

export interface StrategyObjectiveStakeholderDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  /** @format int32 */
  stakeholderId?: number | null;
  stakeholderName?: string | null;
  /** @format int32 */
  internalOrganizationId?: number | null;
  organizationName?: string | null;
}

export type ListStrategyObjectiveInternalOrganizationStakeholdersRequest =
  object;

export type ListStrategyObjectiveAppUserStakeholdersRequest = object;

export interface StrategyObjectiveStakeholderDto2 {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  /** @format int32 */
  stakeholderId?: number | null;
  stakeholderName?: string | null;
  /** @format int32 */
  internalOrganizationId?: number | null;
  organizationName?: string | null;
}

export type ListStrategyObjectiveStakeholdersRequest = object;

export type GetStrategyObjectiveStakeholderRequest = object;

export type DeleteStrategyObjectiveStakeholderRequest = object;

export interface CreateStrategyObjectiveInternalOrganizationStakeholdersRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveId?: number;
  /**
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  internalOrganizationsIds: number[];
}

export interface CreateStrategyObjectiveAppUserStakeholdersRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveId?: number;
  /**
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  appUsersIds: number[];
}

export interface CreateStrategyObjectiveStakeholderRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveId?: number;
  /** @format int32 */
  stakeholderId?: number | null;
  /** @format int32 */
  internalOrganizationId?: number | null;
}

export interface UpdateStrategyObjectiveRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  id: number;
  /**
   * @minLength 3
   * @maxLength 200
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 1500
   */
  description?: string | null;
  /** @minLength 1 */
  code: string;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  status?: StrategyObjectiveStatus | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  responsableId?: number | null;
  /** @format int32 */
  strategyId?: number | null;
  /** @format int32 */
  perspectiveId?: number | null;
  /** @format int32 */
  weight?: number | null;
  /** @format int32 */
  parentStrategyObjectiveId?: number | null;
  stepIndicator?: StrategyObjectiveStepIndicator | null;
}

export interface PagedListOfPagedStrategyObjectiveDto {
  data?: PagedStrategyObjectiveDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PagedStrategyObjectiveDto {
  /** @format int32 */
  id?: number;
  code?: string | null;
  name?: string;
  description?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  status?: StrategyObjectiveStatus;
  statusName?: string;
  strategyName?: string;
  perspectiveName?: string;
  perspectiveCode?: BalancedScorecardPerspectiveCodes;
  responsible?: PagedStrategyObjectiveResponsibleDto | null;
  stepIndicator?: StrategyObjectiveStepIndicator;
  kpis?: PagedStrategyObjectiveDtoItemKpiDto[];
  canBeDeleted?: boolean;
  /** @format int32 */
  parentStrategyObjectiveId?: number | null;
}

export interface PagedStrategyObjectiveResponsibleDto {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  jobTitleName?: string | null;
  photoUrl?: string | null;
}

export interface PagedStrategyObjectiveDtoItemKpiDto {
  /** @format int32 */
  kpiId?: number;
  kpiName?: string;
  /** @format decimal */
  weight?: number;
  kpiCode?: string | null;
  /** @format decimal */
  progressPercentage?: number;
  progressIndicator?: ProgressIndicator;
}

export type GetPagedStrategyObjectivesByPrespectiveRequest = PagedBaseRequest &
  object;

export type GetPagedStrategyObjectivesRequest = PagedBaseRequest & object;

export type ListStrategyObjectivesGroupedByPrespectiveRequest = object;

export interface StrategyObjectivesSummaryDto {
  /** @format int32 */
  achievedCount?: number;
  /** @format int32 */
  onTrackCount?: number;
  /** @format int32 */
  delayedCount?: number;
}

export type GetStrategyObjectivesSummaryRequest = object;

export type GetSubObjectivesSummaryRequest = object;

export type GetStrategyObjectivesKpisSummaryRequest = object;

export type GetStrategyObjectiveProjectsSummaryRequest = object;

export type GetStrategyObjectiveDetailsRequest = object;

export type GetStrategyObjectivesStatusCountsRequest = object;

export interface PagedListOfStrategyObjectiveInitiativeDto {
  data?: StrategyObjectiveInitiativeDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface StrategyObjectiveInitiativeDto {
  /** @format int32 */
  initiativeId?: number;
  initiativeName?: string;
  /** @format date-time */
  plannedStartDate?: string;
  /** @format date-time */
  plannedEndDate?: string;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  /** @format decimal */
  estimatedBudget?: number | null;
  responsibleUser?: ResponsibleUserDto | null;
}

export interface ResponsibleUserDto {
  /** @format int32 */
  userId?: number;
  fullName?: string;
  jobTitle?: string;
  photoUrl?: string | null;
}

export type GetPagedStrategyObjectiveInitiativesRequest = object;

export type GetInitiativeObjectivesSummaryRequest = object;

export interface StrategyObjectiveKpiDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  /** @format int32 */
  kpiId?: number;
  kpiName?: string;
  measurementCycle?: MeasurementCycle;
  unitType?: KpiUnitType;
  /** @format decimal */
  weight?: number;
  /** @format decimal */
  actualValue?: number;
  /** @format decimal */
  targetValue?: number;
}

export type GetInitiativeStrategyObjectiveKpisRequest = object;

export interface StrategyObjectiveItemDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export type GetStrategyObjectivesByStrategiesRequest = object;

export interface StrategyObjectiveDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string | null;
  code?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  status?: StrategyObjectiveStatus;
  /** @format int32 */
  strategyId?: number | null;
  strategyName?: string | null;
  /** @format int32 */
  perspectiveId?: number | null;
  perspectiveName?: string | null;
  parentStrategyObjectiveName?: string | null;
  /** @format decimal */
  weight?: number;
  /** @format int32 */
  responsableId?: number | null;
  respnableOrganizationUnitIds?: number[];
}

export type GetStrategyObjectiveByIdRequest = object;

export type GetAllStrategyObjectivesRequest = object;

export interface EqualizeStrategyObjectiveSubObjectiveWeightsRequest {
  /** @format int32 */
  strategyObjectiveId: number;
}

export interface EqualizeStrategyObjectiveResponsibleOrgUnitsWeightsRequest {
  /** @format int32 */
  strategyObjectiveId: number;
}

export interface EqualizeStrategyObjectiveKpiWeightsRequest {
  /** @format int32 */
  strategyObjectiveId: number;
}

export type DeleteStrategyObjectiveRequest = object;

export interface CreateStrategyObjectiveRequest {
  /**
   * @minLength 3
   * @maxLength 200
   * @pattern ^[\p{L}0-9\s\-]+$
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 1500
   */
  description?: string | null;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyId: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  perspectiveId: number;
  /** @format int32 */
  responsableId?: number | null;
  /** @format decimal */
  weight?: number;
  /** @format int32 */
  parentStrategyObjectiveId?: number | null;
}

export interface UpdateRequest2 {
  /** @format int32 */
  strategyObjectiveId?: number | null;
  /** @format int32 */
  organizationUnitId?: number | null;
  /** @format decimal */
  weight?: number | null;
}

export type PagedRequest2 = PagedBaseRequest & object;

export type GetAllRequest = object;

export type GetRequest = object;

export type DeleteRequest2 = object;

export interface CreateRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  organizationUnitId?: number;
  /**
   * @format decimal
   * @min 0
   * @exclusiveMin true
   */
  weight?: number;
}

export interface StrategyObjectiveProjectDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveId?: number | null;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
}

export type ListStrategyObjectiveProjectsRequest = object;

export type GetStrategyObjectiveProjectRequest = object;

export type DeleteStrategyObjectiveProjectRequest = object;

export interface CreateStrategyObjectiveProjectRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  projectId?: number;
}

export interface UpdateStrategyObjectiveKpiVariableValueRequest {
  /** @format decimal */
  value?: number;
}

export type PagedStrategyObjectiveKpiVariableValuesRequest = PagedBaseRequest &
  object;

export type GetAllStrategyObjectiveKpiVariableValuesRequest = object;

export type GetStrategyObjectiveKpiVariableValueRequest = object;

export type DeleteStrategyObjectiveKpiVariableValueRequest = object;

export interface CreateStrategyObjectiveKpiVariableValueRequest {
  /** @format int32 */
  kpiVariableId?: number;
  /** @format int32 */
  strategyObjectiveKpiId?: number;
  /** @format decimal */
  value?: number;
}

export interface BulkCreateStrategyObjectiveKpiVariableValueRequest {
  /** @format int32 */
  strategyObjectiveKpiMeasurementCycleId: number;
  values: KpiVariableValueRequest[];
}

export interface KpiVariableValueRequest {
  /** @format int32 */
  kpiVariableId?: number;
  /** @format decimal */
  value?: number;
}

export interface UpdateStrategyObjectiveKpiRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  id: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  kpiId?: number | null;
  /**
   * @format decimal
   * @min 0
   */
  weight?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
}

export type ListStrategyObjectiveKpisRequest = object;

export type GetStrategyObjectiveKpiByIdAndKpiIdRequest = object;

export type GetStrategyObjectiveKpiByIdRequest = object;

export type EqualizeKpiObjectivesWeightsRequest = object;

export type DeleteStrategyObjectiveKpiRequest = object;

export interface CreateStrategyObjectiveKpiRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  kpiId?: number;
  /**
   * @format decimal
   * @min 1
   * @max 100
   */
  weight?: number | null;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
}

export interface StrategyObjectiveKpiMeasurementCycleDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveKpiId?: number;
  /** @format date-time */
  plannedDate?: string;
  /** @format date-time */
  actualDate?: string | null;
  /** @format decimal */
  actualValue?: number | null;
}

export type ListStrategyObjectiveKpiMeasurementCyclesRequest = object;

export interface UpdateStrategyObjectiveAttachmentRequest {
  fileName?: string | null;
  fileDesc?: string | null;
  /** @format int32 */
  attachmentTypeId?: number | null;
}

export type GetAllStrategyObjectiveAttachmentsRequest = object;

export type GetStrategyObjectiveAttachmentByIdRequest = object;

export type DownloadStrategyObjectiveAttachmentRequest = object;

export type DeleteStrategyObjectiveAttachmentRequest = object;

export interface AddStrategyObjectiveAttachmentRequest {
  /** @format int32 */
  strategyObjectiveId?: number;
  fileName?: string;
  fileDesc?: string;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  file?: File;
}

export interface UpdateStrategyObjectiveActionRequest {
  /** @format int32 */
  strategyActionTypeId?: number | null;
  name?: string | null;
  description?: string | null;
  /** @format date-time */
  date?: string | null;
}

export interface GetStrategyObjectiveActionByIdDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyActionTypeId?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  name?: string;
  description?: string;
  /** @format date-time */
  date?: string;
}

export type GetStrategyObjectiveActionByIdRequest = object;

export interface UpdateStrategyObjectiveActionAttachmentRequest {
  fileName?: string | null;
  fileDesc?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  attachmentTypeId?: number;
}

export type ListStrategyObjectiveActionAttachmentsRequest = object;

export type DownloadStrategyObjectiveActionAttachmentRequest = object;

export type DeleteStrategyObjectiveActionAttachmentRequest = object;

export interface AddStrategyObjectiveActionAttachmentRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveActionId: number;
  fileName?: string;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
  fileDesc?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  attachmentTypeId?: number;
}

export interface UpdateStrategyManagementActionRequest {
  name?: string | null;
  /** @format date-time */
  date?: string | null;
  code?: StrategyManagementActionTypeCode | null;
  description?: string | null;
}

export interface PagedListOfPagedStrategyManagementActionDto {
  data?: PagedStrategyManagementActionDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PagedStrategyManagementActionDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format date-time */
  date?: string;
  code?: StrategyManagementActionTypeCode;
  description?: string | null;
  canBeDeleted?: boolean;
}

export type PagedStrategyManagementActionsRequest = PagedBaseRequest & object;

export interface StrategyManagementActionDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format date-time */
  date?: string;
  code?: StrategyManagementActionTypeCode;
  description?: string | null;
}

export type GetStrategyManagementActionByIdRequest = object;

export type GetAllStrategyManagementActionsRequest = object;

export type DeleteStrategyManagementActionRequest = object;

export interface AddStrategyManagementActionFileRequest {
  fileName?: string;
  fileDesc?: string;
  /** @format int32 */
  attachmentTypeId?: number;
  webPath?: string | null;
  /** @format binary */
  physicalFile?: File | null;
}

export interface CreateStrategyBudgetItemRequest {
  /** @format int32 */
  strategyId?: number;
  /** @format int32 */
  accountCombinationId?: number;
  /** @format decimal */
  amount?: number;
}

export type ListStrategyBudgetItemsRequest = object;

export interface UpdateStrategyActionTypeRequest {
  name?: string;
}

export interface PagedListOfPagedStrategyActionTypeDto {
  data?: PagedStrategyActionTypeDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PagedStrategyActionTypeDto {
  /** @format int32 */
  id?: number;
  name?: string;
  canBeDeleted?: boolean;
}

export type PagedStrategyActionTypesRequest = object;

export interface GetAllStrategyActionTypesDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetAllStrategyActionTypesRequest = object;

export interface GetStrategyActionTypeByIdDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetStrategyActionTypeByIdRequest = object;

export type DeleteStrategyActionTypeRequest = object;

export interface CreateStrategyActionTypeRequest {
  name?: string;
}

export type GetDashboardStrategyObjectivesInfoRequest = object;

export type GetDashboardStrategyObjectivesKpisInfoRequest = object;

export type GetDashboardStrategyInitiativesInfoRequest = object;

export type GetDashboardStrategyInfoRequest = object;

export type GetDashboardStrategyObjectiveProjectsSummaryRequest = object;

export interface UpdateStrategyRequest {
  name?: string;
  vision?: string;
  /**
   * @minLength 0
   * @maxLength 200
   */
  mission?: string;
  description?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface PagedListOfStrategyPagedDTO {
  data?: StrategyPagedDTO[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type StrategyPagedDTO = BasePagedDto & {
  /** @format int32 */
  id?: number;
  name?: string;
  vision?: string | null;
  mission?: string | null;
  description?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
};

export type PagedStrategiesRequest = PagedBaseRequest & object;

export type ListStrategyPrespectivesRequest = object;

export type Strategy = FullAuditedBaseEntity & {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  vision?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  mission?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  strategyObjectives?: StrategyObjective[];
  code?: string;
};

export type StrategyObjective = FullAuditedBaseEntity & {
  /**
   * @minLength 3
   * @maxLength 200
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 1500
   */
  description?: string | null;
  code?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  status?: StrategyObjectiveStatus;
  /** @format int32 */
  strategyId: number;
  strategy?: Strategy;
  /** @format decimal */
  weight: number;
  /** @format int32 */
  perspectiveId: number;
  perspective?: BalancedScorecardPerspective;
  /** @format int32 */
  responsableId?: number | null;
  responsable?: AppUser | null;
  /** @format int32 */
  parentStrategyObjectiveId?: number | null;
  parentStrategyObjective?: StrategyObjective | null;
  initiatives?: Initiative[];
  strategyObjectiveStakeholders?: StrategyObjectiveStakeholder[];
  strategyObjectiveKpis?: StrategyObjectiveKpi[];
  initiativeStrategyObjectives?: InitiativeStrategyObjective[];
  strategyObjectiveProjects?: StrategyObjectiveProject[];
  expectedResults?: ExpectedResult[];
  respnableOrganizationUnits?: StrategyObjectiveRespnableOrganizationUnit[];
  stepIndicator?: StrategyObjectiveStepIndicator;
};

export type BalancedScorecardPerspective = FullAuditedBaseEntity & {
  /**
   * @minLength 0
   * @maxLength 100
   */
  name: string;
  code: BalancedScorecardPerspectiveCodes;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
  objectives?: StrategyObjective[];
};

export type FullAuditedBaseEntity = FullAuditedBaseEntityOfInt32 & object;

export type FullAuditedBaseEntityOfInt32 = AuditedBaseEntityOfInt32 & {
  isDeleted?: boolean;
  /** @format date-time */
  deletionTime?: string | null;
  /** @format int32 */
  deleterUserId?: number | null;
  deleterUser?: AppUser | null;
};

export type AppUser = FullAuditedBaseEntity & {
  arabicFullName?: string | null;
  /** @format int32 */
  language?: number | null;
  /** @format date-time */
  birthDate?: string | null;
  mobileNumber?: string | null;
  /** @format email */
  emailAddress?: string;
  avatar?: string | null;
  isActive?: boolean;
  isEmailVerified?: boolean;
  passwordHash?: string;
  officeNumber?: string | null;
  /** @format email */
  microsoftTeamsEmail?: string | null;
  /** @format int32 */
  jobTitleId?: number | null;
  jobTitle?: JobTitle | null;
  /** @format int32 */
  orgUnitId?: number | null;
  orgUnit?: InternalOrganization | null;
  userRoles?: UserRole[];
  entrId?: string | null;
  userSource?: AppUserSource;
  enforceChangePasswordNextLogin?: boolean;
  resetPasswordCode?: string | null;
  photoPath?: string | null;
  civilId?: string | null;
  signature?: string | null;
};

export type JobTitle = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  appUsers?: AppUser[] | null;
};

export type InternalOrganization = FullAuditedBaseEntity & {
  /**
   * @minLength 3
   * @maxLength 100
   */
  titleAr?: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  titleEn?: string;
  /** @format int32 */
  parentId?: number | null;
  /** @format int32 */
  organizationUnitTypeId?: number | null;
  organizationUnitType?: OrganizationUnitType | null;
  parent?: InternalOrganization | null;
  inventories?: Inventory[];
  projects?: Project[];
  kpiInternalOrganizations?: KpiInternalOrganization[];
  isLocked?: boolean;
};

export type OrganizationUnitType = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  title: string;
  /**
   * @format int32
   * @min 1
   * @max 10
   */
  level: number;
  internalOrganizations?: InternalOrganization[];
};

export type Inventory = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  location: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  organizationUnitId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  inventoryCategoryId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  inventoryStatusId?: number | null;
  /**
   * @minLength 2
   * @maxLength 100
   */
  inventoryAdmin: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
  inventoryCategory?: InventoryCategory;
  inventoryStatus?: InventoryStatus;
  organizationUnit?: InternalOrganization;
  inventoryOperation?: InventoryOperation[];
  inventoryUser?: InventoryUser[];
};

export type InventoryCategory = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 100
   */
  name: string;
  inventories?: Inventory[];
};

export type InventoryStatus = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 100
   */
  name: string;
  inventories?: Inventory[];
};

export type InventoryOperation = FullAuditedBaseEntity & {
  /**
   * @format date-time
   * @minLength 1
   */
  operationDateTime: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  inventoryOperationType?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  inventoryId?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  quantity?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  receivedBy?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetStatus?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetRequestId: number;
  asset?: AssetsItem;
  inventory?: Inventory;
  receivedByNavigation?: AppUser;
};

export type AssetsItem = FullAuditedBaseEntity & {
  /** @format int32 */
  assetItemId?: number;
  /** @format int32 */
  assetOwnerId?: number | null;
  nameAr?: string;
  nameEn?: string;
  details?: string;
  /** @format int32 */
  assetParentId?: number | null;
  /** @format int32 */
  assetSupplierCompanyId?: number | null;
  /** @format date-time */
  assetAcquiredDate?: string | null;
  /** @format date-time */
  assetDisposedDate?: string | null;
  /** @format int32 */
  maintenanceContractId?: number | null;
  /** @format int32 */
  purchasedContractId?: number | null;
  barCode?: string;
  currentLocation?: string;
  partNumber?: string;
  /** @format byte */
  qrcode?: string;
  /** @format date-time */
  assetDeliveryDate?: string | null;
  /** @format date-time */
  assetWarrantyExpirationDate?: string | null;
  /** @format int32 */
  availableQuantity?: number | null;
  /** @format int32 */
  assetDefinitionId?: number | null;
  madeIn?: string;
  serialNumber?: string;
  /** @format int32 */
  assetStatus?: number | null;
  onHold?: boolean;
  /** @format int32 */
  inventoryID?: number | null;
  assetDefinition?: AssetDefinition;
  maintenanceContract?: Contract;
  purchasedContract?: Contract;
  assetOperations?: AssetOperation[];
  assetParts?: AssetPart[];
  assetSupplierCompany?: Company;
  inventory?: Inventory;
  inventoryOperation?: InventoryOperation[];
  invoiceAssets?: InvoiceAsset[];
  stockTakingLines?: StockTakingLine[];
  tickets?: Ticket[];
  requestAssetLinkAssets?: RequestAssetLinkAsset[];
};

export type AssetDefinition = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 200
   */
  assetMadeIn: string;
  /** @format int32 */
  assetCategoryId?: number | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  assetBrand: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  quantity?: number | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  packagingUnit: string;
  assetCategory?: AssetCategory;
  assetCombable?: AssetCombable[];
  assetsItem?: AssetsItem[];
};

export type AssetCategory = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameEn: string;
  /** @format int32 */
  parentId?: number | null;
  isSearchable?: boolean | null;
  parent?: AssetCategory;
  assetDefition?: AssetDefinition[];
};

export type AssetCombable = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetCombableDefinitionId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetDefinitionId?: number | null;
  assetDefinition?: AssetDefinition;
};

export type Contract = FullAuditedBaseEntity & {
  /** @maxLength 20 */
  contractNumber?: string;
  /** @maxLength 1000 */
  description?: string;
  name?: string;
  contractType?: ContractType;
  /** @format decimal */
  contractValue?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  status?: ContractStatus;
  /** @format int32 */
  accountCombinationId?: number | null;
  accountCombination?: AccountCombination | null;
  /** @format int32 */
  durationTypeId?: number | null;
  durationType?: DurationType | null;
  tenderName?: string | null;
  tenderNumber?: string | null;
  /** @format int32 */
  tenderId?: number | null;
  tender?: Tender | null;
  firstPartyRepRole?: string | null;
  /** @format int32 */
  firstPartyRepId?: number | null;
  firstPartyRep?: AppUser | null;
  secondPartyRepName?: string | null;
  secondPartyRepRole?: string | null;
  secondPartyRepCivilId?: string | null;
  secondPartyRepPostalCode?: string | null;
  secondPartyRepEmail?: string | null;
  secondPartyRepPhone?: string | null;
  secondPartyRepFax?: string | null;
  /** @format int32 */
  secondPartyId?: number | null;
  secondParty?: Company | null;
  relatedContractStatus?: ContractStatus | null;
  /** @format int32 */
  relatedContractId?: number | null;
  relatedContract?: Contract | null;
  mainPdfDocumentFullPath?: string | null;
  mainWordDocumentFullPath?: string | null;
  extensionDocumentFullPath?: string | null;
  /** @format int32 */
  contractSubCategoryId?: number | null;
  contractSubCategory?: ContractSubCategory | null;
  contractMonitors?: ContractMonitor[];
  deliverySchedules?: ContractDeliverySchedule[];
  contractClassifications?: ContractClassification[];
  invoices?: Invoice[];
  contractRequests?: ContractRequest[];
  paymentSchedules?: PaymentSchedule[];
  budgetContractItems?: BudgetContractItem[];
  contractPenalities?: ContractPenality[];
  projectContracts?: ProjectContract[];
};

export type AccountCombination = FullAuditedBaseEntity & {
  /** @format int32 */
  accountId?: number;
  account?: Account;
  /** @format int32 */
  programId?: number;
  program?: Program;
  /** @format int32 */
  subAgencyId?: number;
  subAgency?: SubAgency;
  /** @format int32 */
  functionId?: number;
  function?: Function;
  /** @format int32 */
  unitId?: number;
  unit?: Unit;
  /** @format int32 */
  locationId?: number | null;
  location?: Location;
  isOpened?: boolean;
  isStatic?: boolean;
  /** @format int32 */
  agencyId?: number;
  agency?: Agency;
  budgetContractItems?: BudgetContractItem[];
  paymentScheduleAccountCombinations?: PaymentScheduleAccountCombination[];
  accountCombinationBudgets?: AccountCombinationBudget[];
};

export type Account = FullAuditedBaseEntity & {
  /** @maxLength 100 */
  name?: string;
  /** @pattern ^[0-9]{8}$ */
  code?: string;
  accountType?: AccountType;
  /** @format int32 */
  parentId?: number | null;
  parent?: Account | null;
  isOpen?: boolean;
  isStatic?: boolean;
};

export type Program = FullAuditedBaseEntity & {
  /** @maxLength 100 */
  name?: string;
  /** @pattern ^[0-9]{6}$ */
  code?: string;
  isOpen?: boolean;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  agencyId: number;
  agency?: Agency;
  /** @format int32 */
  parentProgramId?: number | null;
  isStatic?: boolean;
  parentProgram?: Program | null;
};

export type Agency = FullAuditedBaseEntity & {
  /** @maxLength 100 */
  name?: string;
  /** @pattern ^[0-9]{2}$ */
  agencyCD?: string;
  isStatic?: boolean;
};

export type SubAgency = FullAuditedBaseEntity & {
  /** @maxLength 100 */
  name?: string;
  /** @pattern ^[0-9]{2}$ */
  code?: string;
  /** @format int32 */
  agencyId?: number;
  agency?: Agency | null;
  isOpen?: boolean;
  isStatic?: boolean;
};

export type Function = FullAuditedBaseEntity & {
  /** @maxLength 100 */
  name?: string;
  /** @pattern ^[0-9]{7}$ */
  code?: string;
};

export type Unit = FullAuditedBaseEntity & {
  /** @pattern ^[0-9]{10}$ */
  code?: string;
  name?: string;
  /** @format int32 */
  agencyId?: number;
  agency?: Agency | null;
  isStatic?: boolean;
};

export type Location = FullAuditedBaseEntity & {
  /** @pattern ^[0-9]{4}$ */
  locationCode?: string;
  locationName?: string;
  /** @pattern ^[0-9]{2}$ */
  areaCode?: string;
  /** @pattern ^[0-9]{2}$ */
  governorateCode?: string;
  isOpen?: boolean;
  isStatic?: boolean;
};

export type BudgetContractItem = FullAuditedBaseEntity & {
  /** @format int32 */
  accountId?: number;
  account?: AccountCombination;
  /** @format int32 */
  contractId?: number;
  contract?: Contract;
  /** @format decimal */
  price?: number;
};

export type PaymentScheduleAccountCombination = FullAuditedBaseEntity & {
  /** @format int32 */
  paymentScheduleId: number;
  paymentSchedule?: PaymentSchedule;
  /** @format int32 */
  accountCombinationId: number;
  accountCombination?: AccountCombination;
  /** @format decimal */
  amount: number;
};

export type PaymentSchedule = FullAuditedBaseEntity & {
  /** @format int32 */
  contractId: number;
  contract?: Contract;
  /** @format decimal */
  paymentAmount: number;
  /** @format decimal */
  paymentPercentage?: number | null;
  /**
   * @format date-time
   * @minLength 1
   */
  dueDate: string;
  /** @maxLength 500 */
  description?: string;
  paymentScheduleDeliverables?: PaymentScheduleDeliverable[];
  paymentScheduleAccountCombinations?: PaymentScheduleAccountCombination[];
  isPaid?: boolean;
};

export type PaymentScheduleDeliverable = FullAuditedBaseEntity & {
  /** @format int32 */
  paymentScheduleId: number;
  paymentSchedule?: PaymentSchedule;
  /** @format int32 */
  contractDeliveryScheduleId: number;
  contractDeliverySchedule?: ContractDeliverySchedule;
};

export type ContractDeliverySchedule = FullAuditedBaseEntity & {
  /** @format int32 */
  contractId?: number;
  contract?: Contract;
  notes?: string;
  isTimeDuration?: boolean;
  /** @format int32 */
  durationValue?: number | null;
  /** @format int32 */
  durationTypeId?: number | null;
  durationType?: DurationType;
  isDelivered?: boolean;
  /** @format date-time */
  deliveryDate?: string;
};

export type DurationType = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  code: DurationTypeCodes;
  contractDeliverySchedules?: ContractDeliverySchedule[];
  contracts?: Contract[];
};

export type AccountCombinationBudget = FullAuditedBaseEntity & {
  /** @format int32 */
  accountCombinationId?: number;
  accountCombination?: AccountCombination;
  /** @format int32 */
  financialYearId?: number;
  financialYear?: FinancialYear;
  /** @format decimal */
  estimatedBudget?: number;
  /** @format decimal */
  approvedBudget?: number | null;
};

export type FinancialYear = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** @maxLength 300 */
  description?: string | null;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
  isCurrent?: boolean;
  isActive?: boolean;
  tenders?: Tender[];
  projectAnnualBudgets?: ProjectAnnualBudget[];
};

export type Tender = FullAuditedBaseEntity & {
  isDraft?: boolean;
  /** @format int32 */
  currentStep?: number;
  titleAr?: string;
  titleEn?: string;
  number?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  workPlanItemFinancialYearId: number;
  workPlanItemFinancialYear?: WorkPlanItemFinancialYear;
  description?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderCategoryId: number;
  tenderCategory?: TenderCategory;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderStatusId: number;
  tenderStatus?: TenderStatus;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderPhaseId: number;
  tenderPhase?: TenderPhase;
  /** @format int32 */
  tenderAdminId?: number;
  tenderAdmin?: AppUser;
  preparingMeeting?: Meeting;
  /** @format int32 */
  preparingMeetingId?: number | null;
  /** @format int32 */
  offerDuration?: number;
  /** @format decimal */
  estimatedBudget?: number;
  /** @format double */
  yearEstimatedBudget?: number | null;
  contractNo?: string | null;
  implementSite?: string | null;
  /** @format int32 */
  warrantyDuration?: number | null;
  /** @format int32 */
  warrantyDurationTypeId?: number | null;
  warrantyDurationType?: DurationType | null;
  tenderComponents?: TenderComponent[];
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  announceStartDate?: string | null;
  /** @format date-time */
  introductoryMeetingDate?: string | null;
  /** @format date-time */
  receivingQuestionsDate?: string | null;
  /** @format date-time */
  sendingAnswersDate?: string | null;
  /** @format date-time */
  receivingOfferStartDate?: string | null;
  /** @format date-time */
  receivingOfferEndDate?: string | null;
  isTrainingRequired?: boolean;
  /** @format int32 */
  traineesNumber?: number;
  trainingStatement?: string;
  tenderImportatnceNeed?: string | null;
  penalties?: string | null;
  /** @format byte */
  isSpecificOrCustom?: number;
  implementationDetails?: string | null;
  tenderImplementationPlans?: TenderImplementationPlan[];
  /** @format int32 */
  requesterId?: number | null;
  /** @format date-time */
  announceEndDate?: string | null;
  /** @format int32 */
  receivingInquiriesDuration?: number | null;
  /** @format date-time */
  oppeningOffersDate?: string | null;
  /** @format double */
  initialGuaranteeAmount?: number | null;
  /** @format int32 */
  initialGuaranteeDuration?: number | null;
  /** @format double */
  finalGuaranteeAmount?: number | null;
  /** @format int32 */
  finalGuaranteeDuration?: number | null;
  ledgerNo?: string | null;
  tenderScope?: TenderScope;
  divisibility?: Divisibility;
  tenderAccessType?: TenderAccessType;
  tenderOfferMethod?: TenderOfferMethod;
  tenderEvaluationMethod?: TenderEvaluationMethod;
  alternativity?: Alternativity;
  smaplesNeed?: SmaplesNeed | null;
  negotiateMethod?: NegotiateMethod | null;
  /** @format int32 */
  durationValue?: number | null;
  /** @format int32 */
  durationType?: number | null;
  oldContractNumber?: string | null;
  isRelatedToContract?: boolean | null;
  relatedContractNumber?: string | null;
  relatedContractName?: string | null;
  /** @format int32 */
  relatedContractRelationTypeId?: number | null;
  /** @format int32 */
  implementationTypeId?: number | null;
  paymentDetails?: string | null;
  componentsIds?: string | null;
  otherComponents?: string | null;
  /** @format int32 */
  tenderWorkPlanId?: number | null;
  /** @format date-time */
  rfpDeliveryDate?: string | null;
  /** @format int32 */
  workPlanItemId?: number | null;
  workPlanItem?: WorkPlanItem | null;
  /** @format int32 */
  durationOfWarrantyAndMaintenance?: number | null;
  tenderPlannedPhases?: TenderPlannedPhase[];
};

export type WorkPlanItemFinancialYear = FullAuditedBaseEntity & {
  /** @format date-time */
  endDate?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format double */
  totalEstimatedBudget?: number | null;
  /** @format double */
  yearEstimatedBudget?: number | null;
  isOutPlan?: boolean | null;
  isOutITDepartment?: boolean | null;
  note?: string | null;
  /** @format int32 */
  durationValue?: number | null;
  /** @format int32 */
  durationTypeId?: number;
  durationType?: DurationType;
  /** @format int32 */
  financialYearId: number;
  financialYear?: FinancialYear;
  /** @format int32 */
  workPlanItemId: number;
  workPlanItem?: WorkPlanItem;
  /** @format int32 */
  contractTypeId: number;
  contractType?: ContractType2;
  /** @format int32 */
  tenderAdminId?: number | null;
  tenderAdmin?: AppUser;
  /** @format int32 */
  workPlanItemFinancialYearStatusId: number;
  workPlanItemFinancialYearStatus?: WorkPlanItemFinancialYearStatus;
  tender?: Tender | null;
};

export type WorkPlanItem = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /** @maxLength 500 */
  notes?: string | null;
  /** @maxLength 100 */
  contractNo?: string | null;
  /** @format int32 */
  tenderTypeId: number;
  tenderType?: TenderType;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  requesterOrgUnitId: number;
  requesterOrgUnit?: InternalOrganization;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  supervisorOrgUnitId: number;
  supervisorOrgUnit?: InternalOrganization;
  workPlanItemFinancialYears?: WorkPlanItemFinancialYear[];
};

export type TenderType = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  code: TenderTypeCodes;
  tenders?: Tender[];
};

export type ContractType2 = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  code: ContractTypeCodes;
};

export type WorkPlanItemFinancialYearStatus = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  code: WorkPlanItemFinancialYearStatusCodes;
};

export type TenderCategory = FullAuditedBaseEntity & {
  nameAr?: string;
  nameEn?: string;
  tenderTemplateCategories?: TenderTemplateCategory[];
  tenders?: Tender[];
  contractRuleCategories?: ContractRuleCategory[];
};

export type TenderTemplateCategory = EntityBase & {
  /** @format int32 */
  tenderCategoryId?: number | null;
  tenderCategory?: TenderCategory | null;
  /** @format int32 */
  tenderTemplateId?: number | null;
  tenderTemplate?: TenderTemplate | null;
};

export type TenderTemplate = EntityBase & {
  templateDescription?: string | null;
  documentPath?: string | null;
  tenderTemplateCategories?: TenderTemplateCategory[];
};

export type EntityBase = HasDomainEventsBase & {
  /** @format int32 */
  id?: number;
};

export interface HasDomainEventsBase {
  domainEvents?: DomainEventBase[];
}

export interface DomainEventBase {
  /** @format date-time */
  dateOccurred?: string;
}

export type ContractRuleCategory = AuditedBaseEntity & {
  /** @format int32 */
  tenderCategoryId?: number | null;
  tenderCategory?: TenderCategory | null;
  /** @format int32 */
  contractRuleId?: number | null;
  contractRule?: ContractRule | null;
};

export type ContractRule = AuditedBaseEntity & {
  description?: string | null;
  tenderRules?: TenderRule[];
  contractRuleCategories?: ContractRuleCategory[];
};

export type TenderRule = AuditedBaseEntity & {
  /** @format int32 */
  tenderId?: number;
  tender?: Tender;
  ruleDesc?: string | null;
  /** @format int32 */
  contractRuleId?: number | null;
  contractRule?: ContractRule | null;
};

export type AuditedBaseEntity = AuditedBaseEntityOfInt32 & object;

export type AuditedBaseEntityOfInt32 = CreationAuditedBaseEntityOfInt32 & {
  /** @format date-time */
  lastModificationTime?: string | null;
  /** @format int32 */
  lastModifierUserId?: number | null;
  lastModifierUser?: AppUser | null;
};

export type CreationAuditedBaseEntityOfInt32 = EntityBaseOfInt32 & {
  /** @format date-time */
  creationTime?: string;
  /** @format int32 */
  creatorUserId?: number | null;
  creatorUser?: AppUser | null;
};

export type EntityBaseOfInt32 = HasDomainEventsBase & {
  /** @format int32 */
  id?: number;
};

export type TenderStatus = FullAuditedBaseEntity & {
  nameAr?: string | null;
  nameEn?: string | null;
  code?: TenderStatusEnum;
  tenders?: Tender[];
};

export type TenderPhase = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /** @format int32 */
  sortOrder?: number;
  /** @format int32 */
  code: number;
  tenders?: Tender[];
};

export type Meeting = FullAuditedBaseEntity & {
  title?: string;
  meetingStatus?: MeetingStatus;
  meetingMethod?: MeetingMethods;
  meetingType?: MeetingTypes;
  /** @format int32 */
  categoryId?: number | null;
  category?: MeetingCategory | null;
  /** @format date-time */
  plannedStartDate?: string;
  /** @format date-time */
  plannedEndDate?: string;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  description?: string | null;
  meetingUrl?: string | null;
  location?: string | null;
  notes?: string | null;
  otherBusinessNotes?: string | null;
  meetingCompanyAttendees?: MeetingCompanyAttendees[];
  meetingMembersAttendences?: MeetingMembersAttendences[];
  commiteeMeetings?: CommiteeMeeting[];
};

export type MeetingCategory = FullAuditedBaseEntity & {
  nameAr?: string;
  nameEn?: string;
};

export type MeetingCompanyAttendees = FullAuditedBaseEntity & {
  status?: MeetingAttendeeStatusCodes;
  notes?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  meetingId: number;
  meeting?: Meeting;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  companyId: number;
  company?: Company;
  companyRepresentativePhoneNumber?: string;
  companyRepresentativeName?: string;
};

export type Company = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  emailAddress: string;
  /** @maxLength 255 */
  contactEmail?: string | null;
  /** @maxLength 255 */
  address?: string | null;
  /** @maxLength 255 */
  comments?: string | null;
  /** @format int32 */
  rating?: number | null;
  /** @maxLength 255 */
  contactName?: string | null;
  /** @maxLength 100 */
  contactFax?: string | null;
  /** @format int32 */
  companyTypeId?: number | null;
  companyType?: CompanyType;
  companyOffers?: CompanyOffer[];
};

export type CompanyType = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameEn: string;
  companies?: Company[];
};

export type CompanyOffer = FullAuditedBaseEntity & {
  /** @maxLength 2000 */
  notes?: string | null;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  durationTypeId?: number;
  durationType?: DurationType;
  /** @format decimal */
  totalPrice?: number;
  isAwarded?: boolean;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderId: number;
  tender?: Tender;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  companyId: number;
  company?: Company;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  currencyId: number;
  currency?: Currency;
  companyOfferItems?: CompanyOfferItem[];
};

export type Currency = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 50
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  nameEn: string;
  /** @format int32 */
  sortOrder?: number | null;
};

export type CompanyOfferItem = FullAuditedBaseEntity & {
  notes?: string | null;
  itemDesc?: string | null;
  /** @format double */
  quantity?: number | null;
  /** @format decimal */
  unitPrice?: number | null;
  /** @format decimal */
  totalCost?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  companyOfferId: number;
  companyOffer?: CompanyOffer;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderItemId: number;
  tenderItem?: TenderItem;
  /** @format int32 */
  currencyId?: number | null;
  currency?: Currency | null;
};

export type TenderItem = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderId: number;
  tender?: Tender;
  /** @format int32 */
  itemNo?: number;
  itemDesc?: string | null;
  /** @format double */
  quantity?: number | null;
  bidderOfferItems?: CompanyOfferItem[];
  tenderBoQs?: TenderBoQ[];
};

export type TenderBoQ = AuditedBaseEntity & {
  measureUnit?: string | null;
  /** @format int32 */
  quantity?: number | null;
  /** @format int32 */
  boQcategoryId?: number | null;
  boQcategory?: Boqcategory | null;
  /** @format int32 */
  tenderItemId?: number | null;
  tenderItem?: TenderItem | null;
};

export type Boqcategory = AuditedBaseEntity & {
  name?: string | null;
  tenderBoQs?: TenderBoQ[];
};

export type MeetingMembersAttendences = FullAuditedBaseEntity & {
  status?: MeetingAttendeeStatusCodes;
  notes?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  meetingId: number;
  meeting?: Meeting;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  appUserId: number;
  appUser?: AppUser;
};

export type CommiteeMeeting = FullAuditedBaseEntity & {
  /** @format int32 */
  meetingId?: number;
  meeting?: Meeting;
  /** @format int32 */
  committeeId?: number;
  committee?: Committee;
};

export type Committee = FullAuditedBaseEntity & {
  name?: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  committeeTypeId: number;
  committeeType?: CommitteeType;
  description?: string | null;
  isActive?: boolean;
  notes?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
};

export type CommitteeType = AuditedBaseEntity & {
  /** @maxLength 100 */
  nameAr?: string;
  /** @maxLength 100 */
  nameEn?: string;
  committeeTypeActions?: CommitteeTypeAction[];
  tenderCommittees?: Committee[];
};

export type CommitteeTypeAction = AuditedBaseEntity & {
  nameAr?: string | null;
  nameEn?: string | null;
  isActive?: boolean | null;
  /** @format int32 */
  committeeTypeId?: number | null;
  committeeType?: CommitteeType | null;
  tenderCommitteeActionDetails?: TenderCommitteeActionDetail[];
};

export type TenderCommitteeActionDetail = FullAuditedBaseEntity & {
  /** @format int32 */
  actionTypeId?: number;
  actionType?: CommitteeTypeAction;
  /** @format int32 */
  tenderCommitteeId?: number | null;
  tenderCommittee?: Committee;
  note?: string | null;
  attachmentGuid?: string | null;
};

export type TenderComponent = FullAuditedBaseEntity & {
  /** @format int32 */
  tenderId?: number;
  tender?: Tender;
  /** @format int32 */
  componentItemId?: number;
  componentItem?: ComponentItem;
};

export type ComponentItem = FullAuditedBaseEntity & {
  /** @maxLength 100 */
  nameAr?: string;
  /** @maxLength 100 */
  nameEn?: string;
  /** @maxLength 500 */
  description?: string;
  isCustom?: boolean;
  /** @format int32 */
  parentId?: number | null;
  parent?: ComponentItem | null;
  childs?: ComponentItem[];
  tenderComponents?: TenderComponent[];
};

export type TenderImplementationPlan = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tenderId: number;
  /** @format int32 */
  implementPhaseId?: number;
  /** @format int32 */
  durationValue?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationTypeId: number;
  durationType?: DurationType;
  tender?: Tender;
};

export type TenderPlannedPhase = FullAuditedBaseEntity & {
  /** @format int32 */
  tenderPhaseId?: number;
  tenderPhase?: TenderPhase;
  /** @format int32 */
  tenderId?: number;
  tender?: Tender;
  /** @format date-time */
  plannedStartDate?: string;
  /** @format date-time */
  plannedEndDate?: string;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  isActive?: boolean;
};

export type ProjectAnnualBudget = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @format int32 */
  financialYearId: number;
  /** @format decimal */
  amount: number;
  project?: Project;
  financialYear?: FinancialYear;
};

export type Project = FullAuditedBaseEntity & {
  /**
   * @minLength 3
   * @maxLength 200
   */
  name: string;
  description?: string | null;
  /** @format decimal */
  budgetAmount?: number;
  /** @format date-time */
  plannedStartDate?: string | null;
  /** @format date-time */
  plannedEndDate?: string | null;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  status?: ProjectStatus | null;
  /** @format int32 */
  progressPecentage?: number | null;
  projectType?: ProjectTypes | null;
  projectSubType?: ProjectSubTypes | null;
  /** @format int32 */
  durationInYears?: number | null;
  /** @format decimal */
  estimatedBudget?: number | null;
  annualBudgetsNotes?: string | null;
  /** @format int32 */
  kuwaitiJobOpportunities?: number | null;
  /** @format int32 */
  nonKuwaitiJobOpportunities?: number | null;
  includesITComponent?: boolean | null;
  projectNature?: string | null;
  /** @format int32 */
  responsableUserId?: number | null;
  responsableUser?: AppUser | null;
  /** @format int32 */
  responsableInternalOrganizationId?: number | null;
  responsableInternalOrganization?: InternalOrganization | null;
  /** @format int32 */
  developmentalClassificationId?: number | null;
  /** @format int32 */
  developmentPlanGoalId?: number | null;
  /** @format int32 */
  developmentProgramId?: number | null;
  /** @format int32 */
  strategicPlanId?: number | null;
  /** @format int32 */
  itRelationId?: number | null;
  /** @format int32 */
  developmentPlanProjectGoalId?: number | null;
  developmentalClassification?: DevelopmentalClassification | null;
  developmentPlanGoal?: DevelopmentPlanGoal | null;
  developmentProgram?: DevelopmentProgram | null;
  strategicPlan?: StrategicPlan | null;
  itRelation?: ITRelation | null;
  developmentPlanProjectGoal?: DevelopmentPlanProjectGoal | null;
  projectOutputs?: ProjectOutput[];
  projectRelatedInternalOrganizations?: ProjectRelatedInternalOrganization[];
  projectHumanResources?: ProjectHumanResource[];
  projectInitiatives?: ProjectInitiative[];
  projectGoals?: ProjectGoal[];
  projectRequirements?: ProjectRequirement[];
  projectPriorities?: ProjectPriority[];
  projectObstacles?: ProjectObstacle[];
  projectContracts?: ProjectContract[];
  projectKpis?: ProjectKpi[];
  strategyObjectiveProjects?: StrategyObjectiveProject[];
  projectGoalItems?: ProjectGoalItem[];
  kpiProjectPolicies?: KpiProjectPolicy[];
  projectTargetGroups?: ProjectTargetGroup[];
  projectParticipations?: ProjectParticipation[];
  projectPrograms?: ProjectProgram[];
  projectPolicies?: ProjectPolicy[];
  projectTargets?: ProjectTarget[];
  projectPillars?: ProjectPillar[];
  projectServices?: ProjectService[];
  projectBudgetItems?: ProjectBudgetItem[];
};

export type DevelopmentalClassification = FullAuditedBaseEntity & {
  name?: string;
};

export type DevelopmentPlanGoal = FullAuditedBaseEntity & {
  name?: string;
};

export type DevelopmentProgram = FullAuditedBaseEntity & {
  name?: string;
};

export type StrategicPlan = FullAuditedBaseEntity & {
  name?: string;
};

export type ITRelation = FullAuditedBaseEntity & {
  name?: string;
};

export type DevelopmentPlanProjectGoal = FullAuditedBaseEntity & {
  name?: string;
};

export type ProjectOutput = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @minLength 1 */
  output: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
  project?: Project;
};

export type ProjectRelatedInternalOrganization = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @format int32 */
  internalOrganizationId: number;
  project?: Project;
  internalOrganization?: InternalOrganization;
};

export type ProjectHumanResource = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  project?: Project;
  /** @format int32 */
  userId: number;
  user?: AppUser;
};

export type ProjectInitiative = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId?: number;
  project?: Project;
  /** @format int32 */
  initiativeId?: number;
  initiative?: Initiative;
};

export type Initiative = FullAuditedBaseEntity & {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedEndDate: string;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  status?: InitiativeStatus;
  priority?: InitiativePriority;
  /**
   * @format double
   * @min 0
   * @max 100
   */
  progressPercentage?: number;
  /** @format decimal */
  estimatedBudget?: number | null;
  technicalResources?: string | null;
  /** @format int32 */
  estimatedHumanResources?: number | null;
  notes?: string | null;
  /** @format int32 */
  responsibleUserId?: number | null;
  responsibleUser?: AppUser | null;
  /** @format int32 */
  responsibleOrganizationId?: number | null;
  responsibleOrganization?: InternalOrganization | null;
  /** @format int32 */
  parentInitiativeId?: number | null;
  parentInitiative?: Initiative | null;
  milestones?: InitiativeMilestone[];
  projectInitiatives?: ProjectInitiative[];
  deliverables?: InitiativeDeliverable[];
  stakeholders?: InitiativeStakeholder[];
  strategyObjectives?: StrategyObjective[];
  initiativeOutputs?: InitiativeOutput[];
  initiativeStrategyObjectives?: InitiativeStrategyObjective[];
};

export type InitiativeMilestone = FullAuditedBaseEntity & {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  status?: InitiativeMilestoneStatus;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedDate: string;
  /** @format date-time */
  actualDate?: string | null;
  /** @format int32 */
  initiativeId?: number;
  initiative?: Initiative;
};

export type InitiativeDeliverable = FullAuditedBaseEntity & {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  status?: InitiativeDeliverableStatus;
  /**
   * @format date-time
   * @minLength 1
   */
  deliveryDate: string;
  /** @format int32 */
  initiativeId?: number;
  initiative?: Initiative;
};

export type InitiativeStakeholder = FullAuditedBaseEntity & {
  /** @format int32 */
  initiativeId?: number;
  initiative?: Initiative;
  /** @format int32 */
  appUserId?: number | null;
  appUser?: AppUser;
  /** @format int32 */
  internalOrganizationId?: number | null;
  internalOrganization?: InternalOrganization;
};

export type InitiativeOutput = FullAuditedBaseEntity & {
  /** @format int32 */
  initiativeId?: number;
  output?: string;
  isAchieved?: boolean;
  initiative?: Initiative;
};

export type InitiativeStrategyObjective = FullAuditedBaseEntity & {
  /** @format int32 */
  initiativeId?: number;
  initiative?: Initiative;
  /** @format int32 */
  strategyObjectiveId?: number;
  strategyObjective?: StrategyObjective;
};

export type ProjectGoal = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @minLength 1 */
  content: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
  project?: Project;
};

export type ProjectRequirement = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @minLength 1 */
  content: string;
  canBeDeleted?: boolean;
  project?: Project;
};

export type ProjectPriority = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @minLength 1 */
  content: string;
  project?: Project;
};

export type ProjectObstacle = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @minLength 1 */
  content: string;
  project?: Project;
};

export type ProjectContract = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @format int32 */
  contractId: number;
  project?: Project;
  contract?: Contract;
};

export type ProjectKpi = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  kpiId?: number;
  /** @format decimal */
  weight?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format decimal */
  actualValue?: number | null;
  project?: Project;
  kpi?: Kpi;
};

export type Kpi = FullAuditedBaseEntity & {
  /**
   * @minLength 3
   * @maxLength 200
   */
  name: string;
  kpiPolarity?: KpiPolarity;
  measurementCycle?: MeasurementCycle;
  unitType?: KpiUnitType;
  /** @format decimal */
  targetValue?: number;
  /** @format int32 */
  adminUserId?: number;
  category?: KpiCategory;
  /**
   * @minLength 0
   * @maxLength 50
   */
  code?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  equation?: string | null;
  /** @format decimal */
  redFlagValue?: number | null;
  /** @format decimal */
  yellowFlagValue?: number | null;
  /** @format decimal */
  greenFlagValue?: number | null;
  /** @format int32 */
  parentKpiId?: number | null;
  parentKpi?: Kpi | null;
  adminUser?: AppUser;
  kpiVariables?: KpiVariable[];
  strategyObjectiveKpis?: StrategyObjectiveKpi[];
  kpiInternalOrganizations?: KpiInternalOrganization[];
  kpiRespnableOrganizationUnits?: KpiRespnableOrganizationUnit[];
  projectKpis?: ProjectKpi[];
};

export type KpiVariable = FullAuditedBaseEntity & {
  /** @format int32 */
  kpiId: number;
  kpi?: Kpi;
  name?: string;
};

export type StrategyObjectiveKpi = FullAuditedBaseEntity & {
  /** @format int32 */
  strategyObjectiveId: number;
  strategyObjective?: StrategyObjective;
  /** @format int32 */
  kpiId: number;
  kpi?: Kpi;
  /** @format int32 */
  assigneeStakeholderId?: number | null;
  assigneeStakeholder?: StrategyObjectiveStakeholder;
  /** @format decimal */
  weight?: number;
  /** @format decimal */
  actualValue?: number;
  strategyObjectiveKpiVariableValues?: StrategyObjectiveKpiVariableValue[];
  code?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
};

export type StrategyObjectiveStakeholder = FullAuditedBaseEntity & {
  /** @format int32 */
  strategyObjectiveId: number;
  strategyObjective?: StrategyObjective;
  /** @format int32 */
  appUserId?: number | null;
  appUser?: AppUser;
  /** @format int32 */
  internalOrganizationId?: number | null;
  internalOrganization?: InternalOrganization;
};

export type StrategyObjectiveKpiVariableValue = FullAuditedBaseEntity & {
  /** @format int32 */
  kpiVariableId: number;
  kpiVariable?: KpiVariable;
  /** @format int32 */
  strategyObjectiveKpiMeasurementCycleId: number;
  strategyObjectiveKpiMeasurementCycle?: StrategyObjectiveKpiMeasurementCycle;
  /** @format decimal */
  value?: number;
};

export type StrategyObjectiveKpiMeasurementCycle = FullAuditedBaseEntity & {
  /** @format int32 */
  strategyObjectiveKpiId?: number;
  strategyObjectiveKpi?: StrategyObjectiveKpi;
  /** @format date-time */
  plannedDate?: string;
  /** @format date-time */
  actualDate?: string | null;
  isApproved?: boolean;
  /** @format decimal */
  actualValue?: number | null;
};

export type KpiInternalOrganization = FullAuditedBaseEntity & {
  /** @format int32 */
  kpiId?: number;
  /** @format int32 */
  internalOrganizationId?: number;
  kpi?: Kpi;
  internalOrganization?: InternalOrganization;
};

export type KpiRespnableOrganizationUnit = FullAuditedBaseEntity & {
  /** @format int32 */
  kpiId?: number;
  /** @format int32 */
  organizationUnitId?: number;
  /** @format decimal */
  weight?: number;
  kpi?: Kpi;
  organizationUnit?: InternalOrganization;
};

export type StrategyObjectiveProject = FullAuditedBaseEntity & {
  /** @format int32 */
  strategyObjectiveId: number;
  strategyObjective?: StrategyObjective;
  /** @format int32 */
  projectId: number;
  project?: Project;
  risks?: StrategyObjectiveProjectRisk[];
};

export type StrategyObjectiveProjectRisk = FullAuditedBaseEntity & {
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  description: string;
  /** @minLength 1 */
  mitigationPlan: string;
  /** @format int32 */
  projectId?: number;
  project?: StrategyObjectiveProject;
};

export type ProjectGoalItem = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /**
   * @minLength 0
   * @maxLength 300
   */
  title: string;
  type: GoalType;
  project?: Project;
};

export type KpiProjectPolicy = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId?: number;
  name?: string;
  project?: Project;
  /** @format decimal */
  weight?: number | null;
};

export type ProjectTargetGroup = FullAuditedBaseEntity & {
  name?: string;
  /** @format int32 */
  projectId?: number;
  project?: Project;
};

export type ProjectParticipation = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId: number;
  /** @format int32 */
  internalOrganizationId: number;
  /** @format int32 */
  participationNatureId: number;
  project?: Project;
  internalOrganization?: InternalOrganization;
  participationNature?: ProjectParticipationNature;
};

export type ProjectParticipationNature = FullAuditedBaseEntity & {
  name?: string;
};

export type ProjectProgram = FullAuditedBaseEntity & {
  /** @format int32 */
  strategyProgramId?: number;
  /** @format int32 */
  projectId?: number;
  project?: Project;
  strategyProgram?: StrategyProgram;
};

export type StrategyProgram = FullAuditedBaseEntity & {
  name?: string;
};

export type ProjectPolicy = FullAuditedBaseEntity & {
  name?: string;
  /** @format int32 */
  projectId?: number;
  project?: Project;
};

export type ProjectTarget = FullAuditedBaseEntity & {
  name?: string;
  /** @format int32 */
  projectId?: number;
  project?: Project;
};

export type ProjectPillar = FullAuditedBaseEntity & {
  /** @format int32 */
  pillarId?: number;
  /** @format int32 */
  projectId?: number;
  pillar?: StrategyPillar | null;
  project?: Project | null;
};

export type StrategyPillar = FullAuditedBaseEntity & {
  name?: string;
};

export type ProjectService = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId?: number;
  project?: Project;
  name?: string;
};

export type ProjectBudgetItem = FullAuditedBaseEntity & {
  /** @format int32 */
  projectId?: number;
  project?: Project;
  /** @format int32 */
  accountCombinationId?: number;
  accountCombination?: AccountCombination;
  /** @format decimal */
  amount?: number;
};

export type ContractSubCategory = FullAuditedBaseEntity & {
  /** @minLength 1 */
  nameAr: string;
  /** @minLength 1 */
  nameEn: string;
  code: ContractSubCategoryCodes;
  tenderTypeCode: TenderTypeCodes;
  /** @format byte */
  template?: string | null;
  /** @format int32 */
  parentCategoryId: number;
  parentCategory?: ContractCategory;
  defaultClauses?: ContractDefaultClause[];
};

export type ContractCategory = FullAuditedBaseEntity & {
  /** @minLength 1 */
  nameAr: string;
  /** @minLength 1 */
  nameEn: string;
  code: ContractCategoryCodes;
  subCategories?: ContractSubCategory[];
};

export type ContractDefaultClause = FullAuditedBaseEntity & {
  /** @format int32 */
  sortOrder: number;
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  content: string;
  /** @format int32 */
  contractSubCategoryId: number;
  contractSubCategory?: ContractSubCategory;
  customClauses?: ContractCustomClause[];
};

export type ContractCustomClause = FullAuditedBaseEntity & {
  /** @minLength 1 */
  title: string;
  /** @format int32 */
  sortOrder: number;
  /** @format int32 */
  contractId: number;
  contract?: Contract;
  /** @format int32 */
  defaultClauseId: number;
  defaultClause?: ContractDefaultClause;
  versions?: ContractCustomClauseVersion[];
};

export type ContractCustomClauseVersion = FullAuditedBaseEntity & {
  /** @minLength 1 */
  content: string;
  /** @format int32 */
  versionNumber: number;
  isCurrent: boolean;
  /** @format int32 */
  contractCustomClauseId: number;
  contractCustomClause?: ContractCustomClause;
};

export type ContractMonitor = FullAuditedBaseEntity & {
  monitorType?: ContractMonitorType;
  /** @format int32 */
  contractId?: number;
  contract?: Contract;
  /** @format int32 */
  monitorId?: number;
  monitor?: AppUser;
};

export type ContractClassification = FullAuditedBaseEntity & {
  /** @format int32 */
  classificationId?: number;
  classification?: Classification;
  /** @format int32 */
  contractId?: number;
  contract?: Contract;
};

export type Classification = FullAuditedBaseEntity & {
  name?: string;
  contractClassifications?: ContractClassification[];
};

export type Invoice = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 20
   */
  invoiceNumber: string;
  /** @format decimal */
  invoiceAmount: number;
  /**
   * @format date-time
   * @minLength 1
   */
  invoiceDate: string;
  /** @format int32 */
  contractId?: number | null;
  contract?: Contract | null;
  /** @format int32 */
  paymentScheduleId?: number | null;
  paymentSchedule?: PaymentSchedule | null;
  isDelivered?: boolean;
  isPaid?: boolean;
  contractNumber?: string | null;
  contractName?: string | null;
  /** @format int32 */
  attachmentId?: number | null;
  attachment?: Attachment | null;
  /** @format date-time */
  paymentDate?: string | null;
  /** @format int32 */
  companyId?: number;
  company?: Company;
};

export type Attachment = FullAuditedBaseEntity & {
  /** @minLength 1 */
  fileName: string;
  /** @minLength 1 */
  fileDesc: string;
  extension?: string | null;
  mimeType?: string | null;
  /** @format int64 */
  size?: number | null;
  blobName?: string | null;
  webPath?: string | null;
  /** @format int32 */
  relatedToFile?: number | null;
  /** @format int32 */
  versionNumber?: number | null;
  /** @minLength 1 */
  entityId: string;
  /** @format int32 */
  attachmentTypeId: number;
  attachmentCategoryType: AttachmentCategoryTypes;
  attachmentType?: AttachmentType;
  attachmentTags?: EntitiesTag[];
};

export type AttachmentType = FullAuditedBaseEntity & {
  /** @minLength 1 */
  nameAr: string;
  /** @minLength 1 */
  nameEn: string;
  /** @format int32 */
  code?: number | null;
  appAttachments?: Attachment[];
};

export type EntitiesTag = AuditedBaseEntity & {
  /** @format int32 */
  tagId?: number;
  tag?: Tag;
  /** @format int32 */
  tenderId?: number | null;
  tender?: Tender;
  /** @format int32 */
  attachmentId?: number | null;
  attachment?: Attachment;
};

export type Tag = AuditedBaseEntity & {
  /** @minLength 3 */
  name?: string;
  ticketTags?: TicketTag[];
};

export type TicketTag = AuditedBaseEntity & {
  ticket?: Ticket;
  /** @format int32 */
  ticketId?: number;
  tag?: Tag;
  /** @format int32 */
  tagId?: number;
  isService?: boolean;
};

export type Ticket = FullAuditedBaseEntity & {
  /** @format int32 */
  assetId?: number | null;
  asset?: AssetsItem;
  /** @format int32 */
  assetOwnerId?: number | null;
  assetOwner?: AppUser;
  /** @format int32 */
  openedByUserId?: number | null;
  openedByUser?: AppUser;
  /** @format int32 */
  ticketCategoryId?: number | null;
  ticketCategory?: TicketCategory;
  /** @format int32 */
  addressProfileId?: number | null;
  addressProfile?: AddressProfile;
  /**
   * @minLength 2
   * @maxLength 500
   */
  description: string;
  /** @format int32 */
  source?: number | null;
  /**
   * @minLength 2
   * @maxLength 200
   */
  callbackNumber: string;
  /** @format int32 */
  siteId: number;
  site?: Site;
  /** @format date-time */
  issueOpenDate?: string | null;
  /** @format date-time */
  ticketAssignedDate?: string | null;
  /** @format date-time */
  ticketDueDate?: string | null;
  /** @format date-time */
  ticketClosedDate?: string | null;
  ticketAssigned?: boolean | null;
  /** @format int32 */
  ticketSeverityId?: number | null;
  ticketSeverity?: Severity;
  /** @format int32 */
  ticketPriorityId?: number | null;
  ticketPriority?: Priority;
  /** @format int32 */
  ticketClosedById?: number | null;
  ticketClosedBy?: AppUser;
  /** @format int32 */
  ticketStatusId?: number | null;
  ticketStatus?: Status;
  /** @format int32 */
  ticketIssuerId?: number | null;
  ticketIssuer?: AppUser;
  automatedRules?: AutomatedRule[];
};

export type TicketCategory = FullAuditedBaseEntity & {
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  order?: number;
  isGeneral?: boolean;
  /** @format int32 */
  ticketCategoryTechGroupId?: number;
  ticketCategoryTechGroup?: TechGroup;
  ticketCatAssetCatLnk?: TicketCategoryAssetCategoryLink[];
  ticketCatTechGroupLocation?: TicketCategoryTechGroupLocation[];
  tickets?: Ticket[];
};

export type TechGroup = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @minLength 1
   * @maxLength 500
   */
  description: string;
  techGroupUsers?: TechGroupUser[];
  ticketCatTechGroupLocation?: TicketCategoryTechGroupLocation[];
  ticketCategories?: TicketCategory[];
};

export type TechGroupUser = FullAuditedBaseEntity & {
  techGroup?: TechGroup;
  /** @format int32 */
  techGroupId?: number;
  /** @format int32 */
  userId?: number;
  user?: AppUser;
};

export type TicketCategoryTechGroupLocation = FullAuditedBaseEntity & {
  /** @format int32 */
  siteId?: number | null;
  site?: Site;
  /** @format int32 */
  techGroupId?: number | null;
  techGroup?: TechGroup;
  /** @format int32 */
  ticketCategoryId?: number | null;
  ticketCategory?: TicketCategory;
};

export type Site = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  addressProfile?: AddressProfile[];
  buildings?: Building[];
  ticketCatTechGroupLocation?: TicketCategoryTechGroupLocation[];
};

export type AddressProfile = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  locationId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  buildingId: number;
  /**
   * @minLength 1
   * @maxLength 200
   */
  floor: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  zone: string;
  /**
   * @minLength 1
   * @maxLength 200
   */
  office: string;
  /**
   * @minLength 0
   * @maxLength 200
   */
  extension?: string | null;
  building?: Building;
  location?: Site;
  tickets?: Ticket[];
  userAddressProfile?: UserAddressProfile[];
};

export type Building = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  name: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  siteId: number;
  site?: Site;
  addressProfile?: AddressProfile[];
};

export type UserAddressProfile = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  addressProfileId: number;
  addressProfile?: AddressProfile;
  user?: AppUser;
};

export type TicketCategoryAssetCategoryLink = FullAuditedBaseEntity & {
  /** @format int32 */
  ticketCategoryId?: number;
  ticketCategory?: TicketCategory;
  /** @format int32 */
  assetCategoryId?: number;
  assetCategory?: AssetCategory;
};

export type Severity = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  color: string;
  tickets?: Ticket[];
};

export type Priority = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @minLength 4
   * @maxLength 100
   */
  color: string;
  serviceRequest?: ServiceRequest[];
  tickets?: Ticket[];
};

export type ServiceRequest = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  requestIssuerId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  serviceOwnerId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  serviceId?: number | null;
  /**
   * @minLength 3
   * @maxLength 500
   */
  description: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  source?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  openedByUserId?: number | null;
  /**
   * @minLength 5
   * @maxLength 200
   */
  callbackNumber: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  location: string;
  /** @format date-time */
  openDate?: string | null;
  /** @format int32 */
  statusId?: number | null;
  /** @format int32 */
  priorityId?: number | null;
  /** @format int32 */
  serviceCategoryId?: number | null;
  /** @format date-time */
  requestClosedDate?: string | null;
  /** @format int32 */
  closedByUserId?: number | null;
  assignedFl?: boolean | null;
  /** @format date-time */
  assignedDate?: string | null;
  /** @format date-time */
  dueDate?: string | null;
  openedByUser?: AppUser;
  service?: Service;
  serviceCategory?: ServiceCategory;
  serviceOwner?: AppUser;
  closedByUser?: AppUser;
  requestIssuer?: AppUser;
  priority?: Priority;
  status?: Status;
};

export type Service = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameEn: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  serviceCategoryId?: number;
  isActive?: boolean | null;
  serviceCategory?: ServiceCategory;
  serviceRequest?: ServiceRequest[];
};

export type ServiceCategory = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameEn: string;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  order?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  techGroupId: number;
  isGeneral?: boolean;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  adminId?: number | null;
  techGroup?: TechGroup;
  serviceRequest?: ServiceRequest[];
  services?: Service[];
};

export type Status = FullAuditedBaseEntity & {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  color: string;
  taskAssignments?: TaskAssignment[];
  serviceRequest?: ServiceRequest[];
  tickets?: Ticket[];
};

export type TaskAssignment = FullAuditedBaseEntity & {
  title?: string;
  description?: string;
  metaData?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  fromUserId: number;
  fromUser?: AppUser;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  toUserId?: number | null;
  toUser?: AppUser | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  dueDate?: string;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  isSeen?: boolean;
  status?: TaskAssignmentStatusTypes;
  isFromHidden?: boolean;
  isToHidden?: boolean;
  isActive?: boolean;
  entityId?: string | null;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  progress?: number;
  /** @format decimal */
  weight?: number | null;
  /** @format int32 */
  taskTypeId?: number;
  taskType?: TaskType;
  taskAssignmentCategoryType?: TaskAssignmentCategoryTypes;
  parentTaskAssignmentRelation?: TaskAssignmentRelations | null;
  /** @format int32 */
  parentTaskAssignmentId?: number | null;
  parentTaskAssignment?: TaskAssignment | null;
};

export type TaskType = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  code: number;
  /**
   * @minLength 1
   * @maxLength 50
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 50
   */
  nameEn: string;
};

export type AutomatedRule = FullAuditedBaseEntity & {
  /** @format int32 */
  ticketId?: number | null;
  ticket?: Ticket;
  /**
   * @minLength 2
   * @maxLength 200
   */
  name: string;
  isService?: boolean;
};

export type ContractRequest = FullAuditedBaseEntity & {
  contractName?: string | null;
  contractNumber?: string | null;
  /** @format int32 */
  contractId?: number | null;
  status?: ContractRequestStatus;
  duration?: DurationTypeCodes | null;
  /** @format int32 */
  durationValue?: number | null;
  /** @format decimal */
  contractValue?: number;
  /** @format int32 */
  organizationId?: number | null;
  contract?: Contract;
  organization?: InternalOrganization | null;
  justification?: string | null;
};

export type ContractPenality = FullAuditedBaseEntity & {
  /** @format decimal */
  amount?: number;
  cause?: string;
  notes?: string | null;
  /** @format date-time */
  penalityDate?: string;
  /** @format int32 */
  contractId?: number;
  contract?: Contract;
};

export type AssetOperation = FullAuditedBaseEntity & {
  /**
   * @format date-time
   * @minLength 1
   */
  assetOperationDate: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetOperationType: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetRecievedToUserId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetRecievedFromUserId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetId?: number | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  assetRecievedLocation: string;
  /**
   * @minLength 0
   * @maxLength 200
   */
  assetLocation: string;
  asset?: AssetsItem;
  assetRecievedToUser?: AppUser;
  assetRecievedFromUser?: AppUser;
};

export type AssetPart = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetsItemId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  partId: number;
  assetsItem?: AssetsItem;
};

export type InvoiceAsset = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  invoiceId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetItemId: number;
  assetItem?: AssetsItem;
  invoice?: Invoice;
};

export type StockTakingLine = FullAuditedBaseEntity & {
  /** @format int32 */
  stockTakingId?: number;
  stockTaking?: StockTaking;
  /** @format int32 */
  assetId?: number;
  asset?: AssetsItem;
  /** @format int32 */
  qauntityInStock?: number;
  isExist?: boolean | null;
};

export type StockTaking = FullAuditedBaseEntity & {
  /** @format date-time */
  stockTakingDate?: string | null;
  /** @format int32 */
  inventoryId?: number;
  inventory?: Inventory;
  /** @format int32 */
  doneById?: number | null;
  doneBy?: AppUser;
  stockTakingLines?: StockTakingLine[];
};

export type RequestAssetLinkAsset = FullAuditedBaseEntity & {
  /** @format int32 */
  assetItemId?: number;
  assetItem?: AssetsItem;
  /** @format int32 */
  requestAssetLinkId?: number;
  requestAssetLink?: RequestAssetLink;
};

export type RequestAssetLink = FullAuditedBaseEntity & {
  /** @format int32 */
  requestId?: number;
  request?: AssetRequest;
  assetCategory?: AssetCategory;
  /** @format int32 */
  assetCategoryId?: number | null;
  /** @format int32 */
  inventoryId?: number | null;
  inventory?: Inventory;
  /** @format int32 */
  quantity?: number | null;
  /** @format int32 */
  linkStatusId?: number | null;
  addressLocation?: string | null;
  requestAssetLinkAssets?: RequestAssetLinkAsset[];
};

export type AssetRequest = FullAuditedBaseEntity & {
  /**
   * @minLength 0
   * @maxLength 500
   */
  note?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  toUserId?: number | null;
  isAssigned?: boolean;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  toOrgUnitId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  approvedById?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  requesterId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetRequestTypeId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  fromOrgUnitId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  inventoryUserId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assetRequestStatusId: number;
  /** @format date-time */
  approveDate?: string | null;
  toUser?: AppUser;
  requester?: AppUser;
  approvedBy?: AppUser;
  inventoryUser?: AppUser;
  toOrgUnit?: InternalOrganization;
  fromOrgUnit?: InternalOrganization;
  assetRequestStatus?: AssetRequestStatus;
  assetRequestType?: AssetRequestType;
  items?: RequestAssetLink[];
  assetRequestStatusLogs?: AssetRequestStatusLog[];
};

export type AssetRequestStatus = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameEn: string;
  assetRequests?: AssetRequest[];
};

export type AssetRequestType = FullAuditedBaseEntity & {
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameAr: string;
  /**
   * @minLength 2
   * @maxLength 200
   */
  nameEn: string;
  assetRequests?: AssetRequest[];
};

export type AssetRequestStatusLog = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  attachmentId?: number | null;
  /**
   * @minLength 3
   * @maxLength 500
   */
  note: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  requestId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  oldStatusId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  newStatusId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  actionTypeId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  assignedToUserId?: number | null;
  attachment?: Attachment;
  request?: AssetRequest;
  assignedToUser?: AppUser;
  oldStatus?: AssetRequestStatus;
  newStatus?: AssetRequestStatus;
};

export type InventoryUser = FullAuditedBaseEntity & {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  inventoryId: number;
  inventory?: Inventory;
  user?: AppUser;
};

export type UserRole = FullAuditedBaseEntity & {
  /** @format int32 */
  roleId?: number | null;
  role?: Role | null;
  /** @format int32 */
  appUserId?: number | null;
  appUser?: AppUser | null;
};

export type Role = FullAuditedBaseEntity & {
  userRoles?: UserRole[];
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  description: string;
  /** @format int32 */
  code?: number | null;
  editable?: boolean;
  applicationId?: SystemApplications | null;
  rolePermissions?: RolePermission[];
};

export type RolePermission = FullAuditedBaseEntity & {
  enabled?: boolean;
  /** @format int32 */
  roleId: number;
  role?: Role;
  /** @format int32 */
  permissionId: number;
  permission?: Permission;
};

export type Permission = FullAuditedBaseEntity & {
  allowAnonymous?: boolean;
  className?: string | null;
  classNameAr?: string | null;
  showToUser?: boolean;
  /** @format int32 */
  orderNumber?: number | null;
  name?: string | null;
  description?: string | null;
  descriptionAr?: string | null;
  displayName?: string | null;
  displayNameAr?: string | null;
  /** @format int32 */
  parentPermissionId?: number | null;
  parentPermission?: Permission | null;
  subPermissions?: Permission[];
  rolePermissions?: RolePermission[];
};

export type ExpectedResult = FullAuditedBaseEntity & {
  /** @format int32 */
  strategyObjectiveId?: number;
  content?: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
  strategyObjective?: StrategyObjective;
};

export type StrategyObjectiveRespnableOrganizationUnit =
  FullAuditedBaseEntity & {
    /** @format int32 */
    strategyObjectiveId?: number;
    /** @format int32 */
    organizationUnitId?: number;
    /** @format decimal */
    weight?: number;
    strategyObjective?: StrategyObjective;
    organizationUnit?: InternalOrganization;
  };

export type GetAllStrategiesRequest = object;

export interface StrategyDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  description?: string | null;
  vision?: string | null;
  mission?: string | null;
}

export type GetStrategyRequest = object;

export interface EqualizeStrategyObjectiveWeightsRequest {
  /** @format int32 */
  strategyId: number;
}

export type DeleteStrategyRequest = object;

export interface CreateStrategyRequest {
  /**
   * @minLength 1
   * @maxLength 200
   */
  name: string;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  vision?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  mission?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
}

export interface StrategicPlanDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest2 = object;

export interface UpdateStockTakingRequest {
  /** @format date-time */
  stockTakingDate?: string | null;
  /** @format int32 */
  inventoryId?: number | null;
  /** @format int32 */
  doneBy?: number | null;
}

export type GetStockTakingRequest = object;

export type DeleteStockTakingRequest = object;

export interface CreateStockTakingRequest {
  /** @format date-time */
  stockTakingDate?: string | null;
  /** @format int32 */
  inventoryId?: number;
  /** @format int32 */
  doneBy?: number | null;
}

export interface UpdateStatusRequest {
  nameAr?: string | null;
  nameEn?: string | null;
  color?: string | null;
}

export interface PagedListOfStatusDto {
  data?: StatusDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface StatusDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  color?: string;
}

export type PagedStatusesRequest = PagedBaseRequest & object;

export type GetListRequest3 = object;

export type GetStatusRequest = object;

export type DeleteStatusRequest = object;

export interface CreateStatusRequest {
  nameAr?: string;
  nameEn?: string;
  color?: string;
}

export interface UpdateRoleRequest {
  name?: string;
  description?: string;
  applicationId?: SystemApplications;
}

export interface PagedListOfRolePagedListDto {
  data?: RolePagedListDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type RolePagedListDto = BasePagedDto & {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string;
  applicationId?: SystemApplications | null;
  editable?: boolean;
};

export type PagedRolesRequest = object;

export type GetAllRolesRequest = object;

export interface RoleGetByIdDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string;
  editable?: boolean;
}

export type GetRoleByIdRequest = object;

export type DeleteRoleRequest = object;

export interface CreateRoleRequest {
  name?: string;
  description?: string;
  applicationId?: SystemApplications;
}

export interface GetRolePermissionsDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  descriptionEn?: string | null;
  descriptionAr?: string | null;
  isSelected?: boolean;
  isEditable?: boolean;
  /** @format int32 */
  parentPermissionId?: number | null;
  children?: GetRolePermissionsDto[];
}

export type GetRolePermissionsRequest = object;

export interface RolePermissionUpdateRequest {
  grantedPermissions?: number[];
}

export interface UpdateRequestAssetLinkAssetRequest {
  /** @format int32 */
  requestAssetLinkId?: number;
  /** @format int32 */
  assetItemId?: number;
}

export type GetListRequestAssetLinkAssetRequest = object;

export type GetRequestAssetLinkAssetRequest = object;

export type DeleteRequestAssetLinkAssetRequest = object;

export interface CreateRequestAssetLinkRequest {
  /** @format int32 */
  requestAssetLinkId?: number;
  /** @format int32 */
  assetItemId?: number;
}

export interface RelatedServiceDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest4 = object;

export interface RelatedPillarDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest5 = object;

/** @example {"nameAr":"نوع محدث","nameEn":"Updated Type"} */
export interface UpdateQuestionsReceivingTypeRequest {
  nameAr?: string | null;
  nameEn?: string | null;
}

export type PagedQuestionsReceivingTypesRequest = PagedBaseRequest & object;

export type ListQuestionsReceivingTypesRequest = object;

export type GetQuestionsReceivingTypeRequest = object;

export type DeleteQuestionsReceivingTypeRequest = object;

/** @example {"nameAr":"نوع الاستلام","nameEn":"Receiving Type"} */
export interface CreateQuestionsReceivingTypeRequest {
  /** @minLength 1 */
  nameAr: string;
  /** @minLength 1 */
  nameEn: string;
}

export interface UpdatePurchaseTypeRequest {
  /** @maxLength 100 */
  nameAr?: string | null;
  /** @maxLength 100 */
  nameEn?: string | null;
}

export interface GetPurchaseTypeByIdDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
}

export type GetPurchaseTypeByIdRequest = object;

export interface PurchaseTypeListDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetAllPurchaseTypesRequest = object;

export type DeletePurchaseTypeRequest = object;

export interface CreatePurchaseTypeRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 1
   * @maxLength 100
   */
  nameEn: string;
}

export interface UpdateProjectTargetRequest {
  /** @format int32 */
  projectId?: number | null;
  name?: string | null;
}

export interface ProjectTargetDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
}

export type GetListRequest6 = object;

export type DeleteProjectTargetRequest = object;

export interface CreateProjectTargetRequest {
  /** @format int32 */
  projectId?: number;
  name?: string;
}

export type ListProjectTargetGroupsRequest = object;

export type DeleteProjectTargetGroupRequest = object;

export interface CreateProjectTargetGroupRequest {
  /** @format int32 */
  projectId?: number;
  name?: string;
}

export interface ProjectServiceDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
  name?: string;
}

export type GetListRequest7 = object;

export type DeleteProjectServiceRequest = object;

export interface CreateProjectServiceRequest {
  /** @format int32 */
  projectId?: number;
  name?: string;
}

export interface UploadProjectMppFileRequest {
  description?: string;
  /** @format binary */
  file: File;
  importTasks?: boolean;
}

export interface UpdateProjectTaskAssignmentProgressRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  taskId: number;
  /**
   * @format int32
   * @min 0
   * @max 100
   */
  progress?: number;
}

export interface UpdateProjectResponsiblesRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  responsableUserId?: number | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  responsableInternalOrganizationId?: number | null;
}

export interface UpdateProjectTaskAssignmentRequest {
  /** @format int32 */
  id?: number;
  title?: string | null;
  description?: string | null;
  /** @format int32 */
  toUserId?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  dueDate?: string | null;
  taskTypeId?: TaskTypeEnum | null;
  /** @format int32 */
  parentTaskAssignmentId?: number | null;
  taskAssignmentRelationId?: TaskAssignmentRelations | null;
}

export interface UpdateProjectRequest {
  /**
   * @minLength 4
   * @maxLength 200
   */
  name?: string | null;
  description?: string | null;
  /** @format decimal */
  budgetAmount?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  status?: ProjectStatus | null;
  /** @format int32 */
  progressPecentage?: number | null;
  /** @format int32 */
  durationInYears?: number | null;
  /** @format decimal */
  estimatedBudget?: number | null;
  type?: ProjectTypes | null;
  subType?: ProjectSubTypes | null;
  annualBudgetsNotes?: string | null;
  projectNature?: string | null;
  includesITComponent?: boolean | null;
  /** @format int32 */
  kuwaitiJobOpportunities?: number | null;
  /** @format int32 */
  nonKuwaitiJobOpportunities?: number | null;
  /** @format int32 */
  developmentalClassificationId?: number | null;
  /** @format int32 */
  budgetPlanPolicyId?: number | null;
  /** @format int32 */
  developmentPlanGoalId?: number | null;
  /** @format int32 */
  developmentProgramId?: number | null;
  /** @format int32 */
  strategicPlanId?: number | null;
  /** @format int32 */
  itRelationId?: number | null;
  /** @format int32 */
  developmentPlanProjectGoalId?: number | null;
}

export type ExportProjectsByWordRequest = object;

export type ExportProjectsByPDFRequest = object;

export type ExportProjectsByFileRequest = object;

export type PagedProjectTaskAssignmentRequest = object;

export type PagedProjectProgressUpdatesRequest = object;

export interface ProjectListDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
}

export type GetAllProjectsRequest = object;

export type ListProjectTaskAssignmentRequest = object;

export type ListProjectProgressUpdatesRequest = object;

export type GetProjectTaskAssignmentRequest = object;

export interface ProjectSummaryDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format decimal */
  budgetAmount?: number;
  /** @format int32 */
  completionPercentage?: number | null;
  supervisingUnit?: string | null;
}

export type GetProjectSummaryRequest = object;

export interface ProjectObjectivesSummaryDto {
  /** @format int32 */
  totalExpectedOutputs?: number;
  /** @format int32 */
  achievedOutputs?: number;
  /** @format int32 */
  notAchievedOutputs?: number;
  /** @format int32 */
  achievedOutputsPercentage?: number;
  /** @format int32 */
  notAchievedOutputsPercentage?: number;
  /** @format int32 */
  totalInitiatives?: number;
  /** @format int32 */
  achievedInitiatives?: number;
  /** @format int32 */
  notAchievedInitiatives?: number;
  /** @format int32 */
  achievedInitiativesPercentage?: number;
  /** @format int32 */
  notAchievedInitiativesPercentage?: number;
  /** @format int32 */
  onTimeInitiatives?: number;
  /** @format int32 */
  delayedInitiatives?: number;
  /** @format int32 */
  onTimeInitiativesPercentage?: number;
  /** @format int32 */
  delayedInitiativesPercentage?: number;
}

export type GetProjectObjectivesStatsRequest = object;

export interface ProjectKpisSummaryDto {
  /** @format int32 */
  onTimePercentage?: number;
  /** @format int32 */
  latePercentage?: number;
  /** @format int32 */
  needAttentionPercentage?: number;
  /** @format int32 */
  inProgressPercentage?: number;
  /** @format int32 */
  achievedPercentage?: number;
  /** @format int32 */
  greenPercentage?: number;
  /** @format int32 */
  yellowPercentage?: number;
  /** @format int32 */
  redPercentage?: number;
  /** @format int32 */
  greenCount?: number;
  /** @format int32 */
  redCount?: number;
  /** @format int32 */
  yellowCount?: number;
}

export type GetProjectKpisSummaryRequest = object;

export type GetProjectInitiativesRequest = object;

export interface ProjectDetailsDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string | null;
  /** @format date-time */
  plannedStartDate?: string | null;
  /** @format date-time */
  plannedEndDate?: string | null;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  /** @format decimal */
  budgetAmount?: number;
  status?: ProjectStatus | null;
  /** @format int32 */
  progressPercentage?: number | null;
  /** @format int32 */
  inProgressTasksCount?: number;
  /** @format int32 */
  completedTasksCount?: number;
  /** @format int32 */
  lateTasksCount?: number;
  /** @format int32 */
  inProgressTasksPercentage?: number;
  /** @format int32 */
  completedTasksPercentage?: number;
  /** @format int32 */
  lateTasksPercentage?: number;
  annualBudgetsNotes?: string | null;
  responsibleOrganizationalUnit?: RelatedOrganizationalUnitDto | null;
  projectManager?: ProjectManagerDto | null;
  organizationalUnits?: RelatedOrganizationalUnitDto[];
  /** @format int32 */
  organizationalUnitsCount?: number;
  humanResources?: ProjectHumanResourceDto[];
  /** @format int32 */
  humanResourcesCount?: number;
  risks?: ProjectRiskDto[];
  outputs?: ProjectOutputDto[];
  projectParticipations?: ProjectParticipationDto[];
  projectTargetGroups?: ProjectTargetGroupDto[];
  quantitativeGoals?: ProjectGoalItemDto[];
  qualitativeGoals?: ProjectGoalItemDto[];
  kpiProjectPolicies?: KpiProjectPolicyDto[];
  projectPrograms?: ProjectProgramDto[];
  projectServices?: ProjectServiceDto[];
  projectTargets?: ProjectTargetDto[];
  projectPolicies?: ProjectPolicyDto[];
  projectPillars?: ProjectPillarDto[];
  /** @format int32 */
  totalExpectedOutputs?: number;
  /** @format int32 */
  achievedOutputs?: number;
  /** @format int32 */
  notAchievedOutputs?: number;
  /** @format int32 */
  achievedOutputsPercentage?: number;
  /** @format int32 */
  notAchievedOutputsPercentage?: number;
  /** @format int32 */
  kuwaitiJobOpportunities?: number | null;
  /** @format int32 */
  nonKuwaitiJobOpportunities?: number | null;
  /** @format int32 */
  quantitativeGoalsCount?: number;
  /** @format int32 */
  qualitativeGoalsCount?: number;
  projectNature?: string | null;
  developmentalClassificationName?: string | null;
  budgetPlanPolicyName?: string | null;
  developmentPlanGoalName?: string | null;
  developmentProgramName?: string | null;
  relatedServiceName?: string | null;
  strategicPlanName?: string | null;
  relatedPillarName?: string | null;
  itRelationName?: string | null;
  developmentPlanProjectGoalName?: string | null;
  /** @format int32 */
  developmentalClassificationId?: number | null;
  /** @format int32 */
  budgetPlanPolicyId?: number | null;
  /** @format int32 */
  developmentPlanGoalId?: number | null;
  /** @format int32 */
  developmentProgramId?: number | null;
  /** @format int32 */
  relatedServiceId?: number | null;
  /** @format int32 */
  strategicPlanId?: number | null;
  /** @format int32 */
  relatedPillarId?: number | null;
  /** @format int32 */
  itRelationId?: number | null;
  /** @format int32 */
  developmentPlanProjectGoalId?: number | null;
  projectType?: ProjectTypes | null;
}

export interface RelatedOrganizationalUnitDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
}

export interface ProjectManagerDto {
  /** @format int32 */
  id?: number;
  name?: string;
  jobTitle?: string;
  email?: string;
  phoneNumber?: string;
  photoUrl?: string;
}

export interface ProjectHumanResourceDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  userId?: number;
  name?: string;
  jobTitle?: string;
  photoUrl?: string;
}

export interface ProjectRiskDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  title?: string;
  description?: string | null;
}

export interface ProjectOutputDto {
  /** @format int32 */
  id?: number;
  output?: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
}

export interface ProjectParticipationDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  internalOrganizationId?: number;
  /** @format int32 */
  participationNatureId?: number;
  projectName?: string | null;
  organizationName?: string | null;
  participationNatureName?: string | null;
}

export interface ProjectTargetGroupDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
}

export interface ProjectGoalItemDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  projectName?: string | null;
  title?: string;
  type?: GoalType;
}

export interface KpiProjectPolicyDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
  name?: string;
  /** @format decimal */
  weight?: number | null;
}

export interface ProjectProgramDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyProgramId?: number;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
  strategyProgramName?: string;
}

export interface ProjectPolicyDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
}

export interface ProjectPillarDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
  /** @format int32 */
  strategyPillarId?: number;
  strategyPillarName?: string;
}

export type GetProjectDetailsRequest = object;

export type GetProjectByIdRequest = object;

export type GetAllProjectsRequest2 = object;

export interface ForwardProjectTaskAssignmentRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  taskAssignmentId: number;
  /** @minLength 1 */
  description: string;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  toUserId: number;
  /**
   * @format date-time
   * @minLength 1
   */
  dueDate: string;
}

export interface EqualizeTaskAssignmentsWeightsDueToDatesRequest {
  /** @format int32 */
  projectId?: number;
}

export interface EqualizeTaskAssignmentsWeightsRequest {
  /** @format int32 */
  projectId?: number;
}

export interface EqualizeProjectKpiWeightsRequest {
  /** @format int32 */
  projectId?: number;
}

export type DeleteProjectRequest = object;

export interface CreateProjectTaskAssignmentRequest {
  title?: string;
  description?: string;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  dueDate?: string;
  /** @format int32 */
  parentTaskAssignmentId?: number | null;
  /** @format decimal */
  weight?: number | null;
  taskAssignmentRelationId?: TaskAssignmentRelations | null;
  taskTypeId?: TaskTypeEnum;
}

export interface CreateProjectRequest {
  /**
   * @minLength 3
   * @maxLength 100
   */
  name: string;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  description?: string | null;
  /** @format decimal */
  budgetAmount?: number | null;
  status?: ProjectStatus | null;
  /** @format int32 */
  progressPecentage?: number | null;
  /** @format int32 */
  durationInYears?: number | null;
  /** @format decimal */
  estimatedBudget?: number | null;
  type?: ProjectTypes | null;
  subType?: ProjectSubTypes | null;
  projectNature?: string | null;
  /** @format int32 */
  developmentalClassificationId?: number | null;
  /** @format int32 */
  developmentPlanGoalId?: number | null;
  /** @format int32 */
  developmentProgramId?: number | null;
  /** @format int32 */
  strategicPlanId?: number | null;
  /** @format int32 */
  itRelationId?: number | null;
  /** @format int32 */
  developmentPlanProjectGoalId?: number | null;
  /** @format int32 */
  kuwaitiJobOpportunities?: number | null;
  /** @format int32 */
  nonKuwaitiJobOpportunities?: number | null;
  includesITComponent?: boolean | null;
}

export interface CompleteProjectTaskAssignmentRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  taskId: number;
}

export type GetProjectBudgetItemsRequest = object;

export type ListProjectRisksRequest = object;

export type GetProjectRiskByIdRequest = object;

export type DeleteProjectRiskRequest = object;

export interface CreateProjectRiskRequest {
  /**
   * @format int32
   * @minLength 1
   */
  projectId: number;
  /**
   * @minLength 0
   * @maxLength 200
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
}

export interface UpdateProjectRequirementRequest {
  /**
   * @minLength 0
   * @maxLength 1000
   */
  content: string;
}

export type GetPagedProjectRequirementsRequest = object;

export interface ProjectRequirementDto {
  /** @format int32 */
  id?: number;
  content?: string;
  /** @format int32 */
  projectId?: number;
  /** @format date-time */
  createdAt?: string;
}

export type GetListProjectRequirementsRequest = object;

export type DeleteProjectRequirementRequest = object;

export interface CreateProjectRequirementRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  projectId: number;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  content: string;
}

export interface UpdateProjectRelatedInternalOrganizationRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  internalOrganizationId: number;
}

export type PagedProjectRelatedInternalOrganizationRequest = PagedBaseRequest &
  object;

export type GetAllProjectRelatedInternalOrganizationsRequest = object;

export type GetProjectRelatedInternalOrganizationRequest = object;

export type DeleteProjectRelatedInternalOrganizationRequest = object;

export interface CreateProjectRelatedInternalOrganizationRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  projectId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  internalOrganizationId?: number;
}

export interface CreateProjectProgramRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  strategyProgramId?: number;
}

export type DeleteProjectProgramRequest = object;

export type GetListRequest8 = object;

export interface UpdateProjectProgramRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  strategyProgramId?: number;
}

export interface UpdateProjectPriorityRequest {
  content?: string;
}

export type GetPagedProjectPrioritiesRequest = object;

export type GetProjectPrioritiesRequest = object;

export type DeleteProjectPriorityRequest = object;

export interface CreateProjectPriorityRequest {
  /** @format int32 */
  projectId?: number;
  content?: string;
}

export interface UpdateProjectPolicyRequest {
  /** @format int32 */
  projectId?: number | null;
  name?: string;
}

export type GetListProjectPoliciesRequest = object;

export type DeleteProjectPolicyRequest = object;

export interface CreateProjectPolicyRequest {
  /** @format int32 */
  projectId?: number;
  name?: string;
}

export interface UpdateProjectPillarRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  strategyPillarId?: number;
}

export type GetListRequest9 = object;

export interface CreateProjectPillarRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  strategyPillarId?: number;
}

export interface CreateProjectParticipationRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  internalOrganizationId?: number;
  /** @format int32 */
  participationNatureId?: number;
}

export type DeleteProjectParticipationRequest = object;

export type GetProjectParticipationsRequest = object;

export type ListProjectParticipationNaturesRequest = object;

export type PagedProjectOutputsRequest = PagedBaseRequest & object;

export interface ProjectOutputDto2 {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  projectName?: string;
  output?: string;
}

export type GetAllProjectOutputRequest = object;

export type GetProjectOutputRequest = object;

export type DeleteProjectOutputRequest = object;

export interface CreateProjectOutputRequest {
  /** @format int32 */
  projectId?: number;
  output?: string;
}

export interface UpdateProjectObstacleRequest {
  content?: string | null;
  fileDescription?: string | null;
  /** @format binary */
  file?: File | null;
}

export type GetPagedProjectObstaclesRequest = object;

export type GetProjectObstaclesRequest = object;

export type GetProjectObstacleRequest = object;

export type DownloadProjectObstacleFileRequest = object;

export type DeleteProjectObstacleRequest = object;

export interface CreateProjectObstacleRequest {
  /** @format int32 */
  projectId?: number;
  content?: string;
  fileDescription?: string | null;
  /** @format binary */
  file?: File | null;
}

export interface UpdateProjectKpiRequest {
  /** @format int32 */
  kpiId?: number | null;
  /** @format decimal */
  weight?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
}

export type PagedProjectKpiProgressRequest = object;

export type PagedProjectKpisRequest = PagedBaseRequest & object;

export type ListProjectKpiProgressRequest = object;

export type GetProjectKpiByIdRequest = object;

export type GetAllProjectKpisRequest = object;

export type EqualizeKpiProjectsWeightsRequest = object;

export type DeleteProjectKpiRequest = object;

export interface CreateProjectKpiRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  kpiId?: number;
  /** @format decimal */
  weight?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface UpdateProjectIssueRequest {
  name?: string | null;
  description?: string | null;
  currentState?: ProjectIssueState | null;
  reportedByUserIds?: number[] | null;
  assignedToUserIds?: number[] | null;
}

export interface PagedListOfProjectIssueDto {
  data?: ProjectIssueDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ProjectIssueDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string | null;
  currentState?: ProjectIssueState;
  currentStateName?: string;
  /** @format int32 */
  projectId?: number;
  projectName?: string | null;
  reportedBy?: BasicUserDto[];
  assignedTo?: BasicUserDto[];
}

export interface BasicUserDto {
  /** @format int32 */
  id?: number;
  name?: string;
  jobtitle?: string | null;
  photoPath?: string | null;
}

export type PagedProjectIssuesRequest = PagedBaseRequest & object;

export type GetListProjectIssuesRequest = object;

export type GetProjectIssueByIdRequest = object;

export type DeleteProjectIssueRequest = object;

export interface CreateProjectIssueRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  /** @format int32 */
  projectId?: number;
  initialState?: ProjectIssueState;
  reportedByUserIds?: number[];
  assignedToUserIds?: number[];
}

export interface UpdateProjectIssueAttachmentRequest {
  /**
   * @minLength 0
   * @maxLength 255
   * @pattern ^[\u0621-\u064A\u0660-\u0669a-zA-Z0-9\s\-_.,()\[\]]+$
   */
  fileName: string;
  fileDesc?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  attachmentTypeId: number;
}

export interface ResultOfListOfProjectIssueAttachmentDto {
  value?: ProjectIssueAttachmentDto[] | null;
  status?: ResultStatus;
  isSuccess?: boolean;
  successMessage?: string | null;
  correlationId?: string | null;
  location?: string | null;
  errors?: string[] | null;
  validationErrors?: ValidationError[] | null;
}

export interface ProjectIssueAttachmentDto {
  /** @format int32 */
  id?: number;
  fileName?: string;
  fileDesc?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  attachmentTypeName?: string | null;
  extension?: string | null;
  /** @format int64 */
  size?: number | null;
  mimeType?: string | null;
  /** @format date-time */
  createdAt?: string;
  createdBy?: string | null;
}

export type ListProjectIssueAttachmentsRequest = object;

export type DownloadProjectIssueAttachmentRequest = object;

export type DeleteProjectIssueAttachmentRequest = object;

export interface ResultOfInt32 {
  /** @format int32 */
  value?: number;
  status?: ResultStatus;
  isSuccess?: boolean;
  successMessage?: string | null;
  correlationId?: string | null;
  location?: string | null;
  errors?: string[] | null;
  validationErrors?: ValidationError[] | null;
}

export interface AddProjectIssueAttachmentRequest {
  /**
   * @minLength 0
   * @maxLength 255
   * @pattern ^[\u0621-\u064A\u0660-\u0669a-zA-Z0-9\s\-_.,()\[\]]+$
   */
  fileName: string;
  fileDesc?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  attachmentTypeId: number;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface ProjectInitiativeDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  initiativeId?: number;
  initiativeName?: string;
  /** @format date-time */
  initiativeStartDate?: string | null;
  /** @format date-time */
  initiativeEndDate?: string | null;
  initiativeStatus?: InitiativeStatus;
}

export type ListProjectInitiativesRequest = object;

export interface DeleteProjectInitiativeRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  id: number;
}

export interface CreateProjectInitiativeRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  projectId: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  initiativeId: number;
}

export interface UpdateProjectHumanResourceRequest {
  /** @format int32 */
  userId?: number;
}

export type PagedProjectHumanResourceRequest = PagedBaseRequest & object;

export type GetAllProjectHumanResourcesRequest = object;

export type GetProjectHumanResourceRequest = object;

export type DeleteProjectHumanResourceRequest = object;

export interface CreateProjectHumanResourceRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  projectId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  userId?: number;
}

export interface UpdateProjectGoalRequest {
  /** @format int32 */
  id?: number;
  content?: string | null;
  isAchieved?: boolean | null;
}

export type PagedProjectGoalsRequest = object;

export type GetListProjectGoalsRequest = object;

export type GetProjectGoalRequest = object;

export type DeleteProjectGoalRequest = object;

export interface CreateProjectGoalRequest {
  /** @format int32 */
  projectId?: number;
  content?: string;
}

export type ListProjectGoalItemsRequest = object;

export type DeleteProjectGoalItemRequest = object;

export interface CreateProjectGoalItemRequest {
  /** @format int32 */
  projectId?: number;
  title?: string;
  type?: GoalType;
}

export interface PagedListOfProjectContractDto {
  data?: ProjectContractDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ProjectContractDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  contractId?: number;
  contractName?: string | null;
}

export type PagedProjectContractsRequest = object;

export type ListProjectContractsRequest = object;

export type DeleteProjectContractRequest = object;

export interface CreateProjectContractRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  contractId?: number;
}

export interface UpdateProjectBudgetItemRequest {
  /** @format int32 */
  accountId?: number | null;
  /** @format decimal */
  amount?: number | null;
}

export type PagedProjectBudgetItemRequest = PagedBaseRequest & object;

export type GetAllProjectBudgetItemsRequest = object;

export type GetProjectBudgetItemRequest = object;

export type DeleteProjectBudgetItemRequest = object;

export interface CreateProjectBudgetItemRequest {
  /** @format int32 */
  projectId?: number;
  /** @format int32 */
  accountCombinationId?: number;
  /** @format decimal */
  amount?: number;
}

export type DeleteProjectAttachmentRequest = object;

export interface UpdateProjectAttachmentRequest {
  fileName?: string | null;
  fileDesc?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
}

export type ListProjectAttachmentsRequest = object;

export type DownloadProjectAttachmentRequest = object;

export interface AddProjectAttachmentRequest {
  /** @format int32 */
  projectId?: number;
  fileName?: string;
  fileDesc?: string | null;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @format binary */
  file?: File;
}

export interface UpdateProjectAnnualBudgetRequest {
  /**
   * @format decimal
   * @min 0
   */
  amount?: number;
}

export type GetAllProjectAnnualBudgetsRequest = object;

export type GetProjectAnnualBudgetRequest = object;

export type DeleteProjectAnnualBudgetRequest = object;

export interface CreateProjectAnnualBudgetRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  projectId: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  financialYearId: number;
  /**
   * @format decimal
   * @min 0
   * @minLength 1
   */
  amount: number;
}

export interface UpdateSubProgramRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** @format int32 */
  mainProgramId: number;
}

export interface UpdateProjectRequest2 {
  /** @format int32 */
  mainProgramId: number;
  /** @format int32 */
  subProgramId: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
}

export interface UpdateMainProgramRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
}

export interface PagedListOfProgramHistoryResponseDto {
  data?: ProgramHistoryResponseDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ProgramHistoryResponseDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  actionCode?: number;
  /** @format int32 */
  actionStatus?: number;
  programName?: string;
  code?: string;
  level?: ProgramLevel;
  description?: string;
  /** @format date-time */
  actionDate?: string;
  error?: string | null;
  creatorUser?: string | null;
}

export type GetPagedProgramHistoriesRequest = object;

export type PagedProgramsRequest = PagedBaseRequest & object;

export interface ListSubProgramEntity {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetSubProgramsByMainIdRequest = object;

export interface ListMainProgramEntity {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetAllMainProgramsRequest = object;

export interface SubProgramDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
  /** @format int32 */
  mainProgramId?: number;
}

export type GetSubProgramByIdRequest = object;

export interface ProjectDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
  /** @format int32 */
  subProgramId?: number;
  /** @format int32 */
  mainProgramId?: number;
}

export type GetProjectByIdRequest2 = object;

export interface MainProgramDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetMainProgramByIdRequest = object;

export interface ProgramListDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetAllProgramsRequest = object;

export type DeleteProgramRequest = object;

export interface DeactivateProgramRequest {
  /** @format int32 */
  id: number;
}

export interface CreatedProgramDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
  /** @format int32 */
  agencyId?: number;
}

export interface CreateSubProgramRequest {
  /** @format int32 */
  mainProgramId: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** @minLength 1 */
  code: string;
}

export interface CreateProjectRequest2 {
  /** @format int32 */
  subProgramId: number;
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 1
   * @pattern ^[0-9]{3}$
   */
  code: string;
}

export interface CreateMainProgramRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 1
   * @pattern ^[0-9]{2}$
   */
  code: string;
}

export interface ActivateProgramRequest {
  /** @format int32 */
  id: number;
}

export interface UpdatePriorityRequest {
  nameEn?: string | null;
  nameAr?: string | null;
  color?: string | null;
}

export interface PagedListOfPriorityPagedDto {
  data?: PriorityPagedDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PriorityPagedDto {
  /** @format int32 */
  id?: number;
  nameEn?: string;
  nameAr?: string;
  color?: string;
  canBeDeleted?: boolean;
}

export type PagedPrioritiesRequest = PagedBaseRequest & object;

export type GetAllPrioritiesRequest = object;

export interface PriorityDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  color?: string;
}

export type GetPriorityRequest = object;

export type DeletePriorityRequest = object;

export interface CreatePriorityRequest {
  nameAr?: string;
  nameEn?: string;
  color?: string;
}

export interface UpdatePreliminaryMeetingAttendeeRequest {
  /** @format int32 */
  meetingId: number;
  /** @format date-time */
  actualStartDate?: string | null;
  /** @format date-time */
  actualEndDate?: string | null;
  /** @format int32 */
  attendeeId: number;
  /** @minLength 1 */
  companyRepresentativeName: string;
  /** @minLength 1 */
  companyRepresentativePhoneNumber: string;
  notes?: string | null;
}

export interface UpdatePreliminaryMeetingRequest {
  /** @format int32 */
  meetingId: number;
  /** @minLength 1 */
  title: string;
  /** @format int32 */
  meetingMethod: number;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedEndDate: string;
  description?: string | null;
  meetingUrl?: string | null;
  location?: string | null;
  notes?: string | null;
}

export interface RemovePreliminaryMeetingAttendeeRequest {
  /** @format int32 */
  meetingId: number;
  /** @format int32 */
  attendeeId: number;
}

export type PagedPreliminaryMeetingsRequest = PagedBaseRequest & object;

export type MyUpcomingPagedPreliminaryMeetingsRequest = PagedBaseRequest &
  object;

export type MyPreviousPagedPreliminaryMeetingsRequest = PagedBaseRequest &
  object;

export type GetPreliminaryMeetingByIdRequest = object;

export type GetPreliminaryMeetingAttendeesRequest = object;

export type GetPreliminaryMeetingRequest = object;

export type DeletePreliminaryMeetingRequest = object;

export interface CreatePreliminaryMeetingRequest {
  /** @format int32 */
  tenderId: number;
  /** @minLength 1 */
  title: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedEndDate: string;
}

export interface CancelPreliminaryMeetingRequest {
  /** @format int32 */
  id: number;
}

export interface AddPreliminaryMeetingAttendeeRequest {
  /** @format int32 */
  meetingId: number;
  /** @format date-time */
  actualStartDate?: string;
  /** @format date-time */
  actualEndDate?: string;
  attendees?: AddPreliminaryMeetingAttendeeItemRequest[];
}

export interface AddPreliminaryMeetingAttendeeItemRequest {
  /** @format int32 */
  companyId: number;
  /** @minLength 1 */
  companyRepresentativeName: string;
  /** @minLength 1 */
  companyRepresentativePhoneNumber: string;
}

export type SetNotificationAsSeenRequest = object;

export type PagedNotificationsRequest = PagedBaseRequest & object;

export interface UpdateMeetingAgendaRequest {
  /** @format int32 */
  id: number;
  /**
   * @minLength 0
   * @maxLength 500
   */
  title?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /** @format int32 */
  durationInMins: number;
}

export interface UpdateDiscussionRequest {
  /** @format int32 */
  id: number;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  discussion: string;
}

export type PagedMeetingTopicsAgendaRequest = PagedBaseRequest & object;

export type GetMinutesWordFileRequest = object;

export type GetMeetingAgendaWordFileRequest = object;

export interface UpdateMeetingTopicDiscussionRequest {
  /** @format int32 */
  id: number;
  /** @format int32 */
  meetingId?: number | null;
  /** @format int32 */
  meetingTopicId?: number | null;
  discussionType?: MeetingDiscussionType | null;
  discussionText?: string | null;
  /** @format int32 */
  discussantUserId?: number | null;
}

export type ListMeetingTopicDiscussionsRequest = object;

export type DeleteMeetingTopicDiscussionRequest = object;

export interface CreateMeetingTopicDiscussionRequest {
  /** @format int32 */
  meetingId: number;
  /** @format int32 */
  meetingTopicId: number;
  discussionType: MeetingDiscussionType;
  /** @minLength 1 */
  discussionText: string;
  /** @format int32 */
  discussantUserId?: number | null;
}

export interface UpdateMeetingTaskAssignmentRequest {
  /** @format int32 */
  id: number;
  /**
   * @minLength 0
   * @maxLength 255
   */
  title?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  entityId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  fromUserId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  toUserId?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  dueDate?: string | null;
}

export type PagedMeetingTaskAssignmentsRequest = PagedBaseRequest & object;

export type DeleteMeetingTaskAssignmentRequest = object;

export interface CreateMeetingTaskAssignmentRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  entityId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  fromUserId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  toUserId: number;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  dueDate: string;
}

export interface UpdateMeetingDecisionRequest {
  decision?: string | null;
  /** @format int32 */
  meetingId?: number | null;
  /** @format int32 */
  approvalUserId?: number | null;
  /** @format int32 */
  responsibleUserId?: number | null;
}

export type RejectMeetingDecisionRequest = object;

export type PagedMeetingDecisionRequest = object;

export type ListMeetingDecisionRequest = object;

export type GetMeetingDecisionByIdRequest = object;

export type DeleteMeetingDecisionRequest = object;

export type ApproveMeetingDecisionRequest = object;

export interface AddMeetingDecisionRequest {
  /** @minLength 1 */
  decision: string;
  /** @format int32 */
  meetingId: number;
  /** @format int32 */
  responsibleUserId: number;
  /** @format int32 */
  approvalUserId: number;
}

export interface UpdateOtherBusinessNotesRequest {
  /** @format int32 */
  meetingId: number;
  /**
   * @minLength 0
   * @maxLength 500
   */
  otherBusinessNotes: string;
}

export interface UpdateCommitteMettingRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  title: string;
  meetingMethod: MeetingMethods;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedEndDate: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description: string;
  /** @format uri */
  meetingUrl?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  location?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
}

export interface UpdateMeetingRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  title: string;
  meetingMethod: MeetingMethods;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedEndDate: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description: string;
  /** @format uri */
  meetingUrl?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
}

/** @example {"attachmentId":1,"toUserId":2,"dueDate":"2025-08-27T06:29:30.9673319Z","note":"Please review this document."} */
export interface SendDocumentToApproveRequest2 {
  /** @format int32 */
  attachmentId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

export type PagedCommitteMettingsRequest = PagedBaseRequest & object;

export type MyUpcomingPagedMeetingsRequest = PagedBaseRequest & object;

export type MyPreviousPagedMeetingsRequest = PagedBaseRequest & object;

/** @example {"meetingId":123} */
export interface MarkMeetingAsCompletedRequest {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  meetingId: number;
}

export type ListDocumentApprovalsRequest2 = object;

export type GetCommitteMettingRequest = object;

export type GetMettingRequest = object;

export type DeleteCommitteMeetingRequest = object;

export interface CreateCommitteMettingRequest {
  /** @format int32 */
  committeId?: number | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  title: string;
  meetingMethod: MeetingMethods;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedStartDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedEndDate: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description: string;
  /** @format uri */
  meetingUrl?: string | null;
  /**
   * @minLength 0
   * @maxLength 255
   */
  location?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
}

export interface CancelMeetingRequest {
  /** @format int32 */
  id: number;
}

export interface AddOtherBusinessNotesRequest {
  /** @format int32 */
  meetingId?: number;
  otherBusinessNotes?: string;
}

/** @example {"fileName":"UpdatedMeetingFile"} */
export interface UpdateMeetingFileNameRequest {
  fileName?: string;
}

export interface UpdateMeetingFileRequest {
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

/** @example {"tenderId":0,"attachmentId":456,"webPath":"/uploads/tenders/document-file"} */
export interface UpdateDocumentFileWebPathRequest2 {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  attachmentId?: number;
  /** @minLength 1 */
  webPath: string;
}

export interface RestoreMeetingFileVersionRequest {
  /** @format int32 */
  attachmentId?: number;
  versionId?: string;
}

export type PagedMeetingFileRequest = PagedBaseRequest & object;

export type GetMeetingFileVersionsRequest = object;

export type DownloadMeetingFileRequest = object;

export type DeleteMeetingFileRequest = object;

/** @example {"meetingId":123,"fileName":"Meeting.pdf","attachmentTypeId":0,"fileDesc":"Meeting document","physicalFile":null,"webPath":"/uploads/meetings/files"} */
export interface AddMeetingFileRequest {
  /** @format int32 */
  meetingId?: number;
  /** @minLength 1 */
  fileName: string;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @minLength 1 */
  fileDesc: string;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export interface UpdateMaintenanceVisitRequest {
  /** @format int32 */
  maintenanceEngineerId?: number | null;
  /** @format date-time */
  maintenanceVisitStartDate?: string | null;
  /** @format date-time */
  maintenanceVisitEndDate?: string | null;
  /** @format int32 */
  staffId?: number | null;
  details?: string | null;
  visitReason?: string | null;
  /** @format int32 */
  maintenanceContractId?: number | null;
}

export interface PagedListOfMaintenanceVisitDto {
  data?: MaintenanceVisitDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface MaintenanceVisitDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  maintenanceEngineerId?: number | null;
  maintenanceEngineerName?: string | null;
  /** @format date-time */
  maintenanceVisitStartDate?: string | null;
  /** @format date-time */
  maintenanceVisitEndDate?: string | null;
  /** @format int32 */
  staffId?: number | null;
  staffName?: string | null;
  details?: string;
  visitReason?: string;
  /** @format int32 */
  maintenanceContractId?: number | null;
  maintenanceContractName?: string | null;
  canBeDeleted?: boolean;
}

export type PagedMaintenanceVisitsRequest = PagedBaseRequest & object;

export type GetMaintenanceVisitByIdRequest = object;

export interface MaintenanceVisitListDto {
  /** @format int32 */
  id?: number;
  maintenanceEngineerName?: string | null;
  /** @format date-time */
  maintenanceVisitStartDate?: string | null;
  /** @format date-time */
  maintenanceVisitEndDate?: string | null;
  staffName?: string | null;
  details?: string;
  visitReason?: string;
  maintenanceContractName?: string | null;
}

export type GetAllMaintenanceVisitsRequest = object;

export type DeleteMaintenanceVisitRequest = object;

export interface CreateMaintenanceVisitRequest {
  /** @format int32 */
  maintenanceEngineerId?: number;
  /** @format date-time */
  maintenanceVisitStartDate?: string;
  /** @format date-time */
  maintenanceVisitEndDate?: string;
  /** @format int32 */
  staffId?: number;
  details?: string;
  visitReason?: string;
  /** @format int32 */
  maintenanceContractId?: number | null;
}

export interface UpdateMaintenanceEngineerRequest {
  /** @format int32 */
  id?: number;
  name?: string | null;
  email?: string | null;
  mobile?: string | null;
  notes?: string | null;
  /** @format int32 */
  maintenaceEngineerCompanyId?: number | null;
  /** @format int32 */
  rating?: number | null;
  /** @format int32 */
  attachmentId?: number | null;
  /** @format binary */
  physicalFile?: File | null;
  extension?: string | null;
  /** @format int64 */
  size?: number | null;
}

export interface CreateMaintenanceEngineerRequest {
  name?: string;
  /** @format email */
  email?: string;
  mobile?: string;
  notes?: string;
  fileDesc?: string | null;
  webPath?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 100
   */
  rating?: number | null;
  /** @format int32 */
  attachmentTypeId?: number | null;
  /** @format int32 */
  maintenaceEngineerCompanyId?: number | null;
  /** @format binary */
  physicalFile?: File | null;
}

export interface UpdateGovernorateRequest {
  name?: string;
}

export interface UpdateAreaRequest {
  name?: string;
}

export interface PagedListOfLocationHistoryResponseDto {
  data?: LocationHistoryResponseDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface LocationHistoryResponseDto {
  /** @format int32 */
  actionCode?: number;
  /** @format int32 */
  actionStatus?: number;
  areaName?: string;
  governorateName?: string;
  locationCode?: string;
  areaCode?: string;
  governorateCode?: string;
  creationUser?: string;
  /** @format date-time */
  creationDate?: string;
}

export type GetPagedLocationHistoriesRequest = PagedBaseRequest & object;

export type PagedResultOfLocationResponseDto = ResultOfLocationResponseDto & {
  pagedInfo?: PagedInfo | null;
};

export interface PagedInfo {
  /** @format int64 */
  pageNumber?: number;
  /** @format int64 */
  pageSize?: number;
  /** @format int64 */
  totalPages?: number;
  /** @format int64 */
  totalRecords?: number;
}

export interface ResultOfLocationResponseDto {
  value?: LocationResponseDto | null;
  status?: ResultStatus;
  isSuccess?: boolean;
  successMessage?: string | null;
  correlationId?: string | null;
  location?: string | null;
  errors?: string[] | null;
  validationErrors?: ValidationError[] | null;
}

export interface LocationResponseDto {
  /** @format int32 */
  id?: number;
  locationCode?: string;
  governorateCode?: string;
  governorateName?: string | null;
  areaName?: string | null;
  areaCode?: string;
  creationUserName?: string;
  /** @format date-time */
  creationDate?: string;
  isOpen?: boolean;
  isChanged?: boolean;
  canBeDeleted?: boolean;
  isStatic?: boolean;
}

export type GetPagedLocationsRequest = PagedBaseRequest & object;

export interface ListGovermentEntity {
  id?: string;
  name?: string;
}

export type GetAllGovernoratesRequest = object;

export interface ListAreaEntity {
  id?: string;
  name?: string;
}

export type GetAllAreasRequest = object;

export interface LocationListDto {
  /** @format int32 */
  id?: number;
  locationName?: string;
  locationCode?: string;
}

export type GetAllLocationsRequest = object;

export type SoftDeleteLocationRequest = object;

export type DeactivateStatusLocationRequest = object;

export interface CreatedLocationDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  locationCode?: number;
  locationName?: string;
  /** @format int32 */
  areaCode?: number;
  /** @format int32 */
  governorateCode?: number | null;
}

export interface CreateLocationRequest {
  /**
   * @minLength 1
   * @pattern ^[0-9]{2}$
   */
  govermentCode: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  govermentName: string;
  /**
   * @minLength 1
   * @pattern ^[0-9]{2}$
   */
  areaCode: string;
  areaName?: string;
}

export interface AddAreaToGovernorateRequest {
  /** @minLength 1 */
  govermentCode: string;
  /** @minLength 1 */
  areaCode: string;
  /**
   * @minLength 1
   * @maxLength 255
   */
  areaName: string;
}

export type ActivateStatusLocationRequest = object;

export interface UploadLicenceRequest {
  /**
   * @format binary
   * @minLength 1
   */
  licenceFile: File;
}

export type GetLicenceRequest = object;

export interface UpdateKpiVariableRequest {
  name?: string;
}

export type PagedKpiVariablesRequest = PagedBaseRequest & object;

export type GetAllKpiVariableRequest = object;

export type GetKpiVariableRequest = object;

export type DeleteKpiVariableRequest = object;

export interface CreateKpiVariableRequest {
  /** @format int32 */
  kpiId?: number;
  name?: string;
}

export interface UpdateKpiRequest {
  name?: string | null;
  description?: string | null;
  /** @format int32 */
  adminUserId?: number | null;
  /** @format decimal */
  targetValue?: number | null;
  measurementCycle?: MeasurementCycle | null;
  unitType?: KpiUnitType | null;
  polarity?: KpiPolarity | null;
  category?: KpiCategory | null;
}

export interface SetFlagValuesRequest {
  /** @format decimal */
  greenFlag: number;
  /** @format decimal */
  yellowFlag: number;
  /** @format decimal */
  redFlag: number;
}

export interface SetEquationRequest {
  equation: StrategyObjectiveEquationTag[];
}

export interface StrategyObjectiveEquationTag {
  type?: StrategyObjectiveEquationTagType;
  name?: string;
  value?: string;
}

export type PagedKpisRequest = PagedBaseRequest & object;

export interface KpiDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format decimal */
  targetValue?: number;
}

export type ListUnassignedKpisRequest = object;

export type GetStrategyObjectivesRequest = object;

export type GetChildrenRequest = object;

export type GetKpiRequest = object;

export interface EqualizeSubKpisWeightsRequest {
  /** @format int32 */
  strategyObjectiveId: number;
}

export type DeleteKpiRequest = object;

export interface CreateKpiRequest {
  /** @minLength 1 */
  name: string;
  description?: string | null;
  /** @format int32 */
  parentKpiId?: number | null;
  /** @format int32 */
  adminUserId: number;
  /** @format decimal */
  targetValue: number;
  measurementCycle: MeasurementCycle;
  unitType: KpiUnitType;
  polarity: KpiPolarity;
  /** @format decimal */
  weight?: number | null;
  category?: KpiCategory;
}

export interface UpdateRequest3 {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  kpiId?: number | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  organizationUnitId?: number | null;
  /**
   * @format decimal
   * @min 0
   * @exclusiveMin true
   * @max 100
   */
  weight?: number | null;
}

export type PagedRequest3 = object;

export type GetByIdRequest2 = object;

export type GetAllRequest2 = object;

export type EqualizeKpiResonableOrgsWeightsRequest = object;

export type DeleteRequest3 = object;

export interface CreateRequest2 {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  kpiId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  organizationUnitId?: number;
  /**
   * @format decimal
   * @min 0
   * @exclusiveMin true
   * @max 100
   */
  weight?: number;
}

export type ListKpiProjectPoliciesRequest = object;

export type DeleteKpiProjectPolicyRequest = object;

export interface CreateKpiProjectPolicyRequest {
  /** @format int32 */
  projectId?: number;
  name?: string;
  /** @format decimal */
  weight?: number | null;
}

export interface AssignedOrganizationResponse {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  organizationId?: number;
  titleAr?: string;
  titleEn?: string;
}

export type GetOrganizationsForKpiQuery = object;

export type RemoveOrganizationsFromKpiCommand = object;

export interface AddOrganizationsToKpiCommand {
  /** @format int32 */
  kpiId?: number;
  /** @format int32 */
  organizationId?: number;
}

/** @example {"name":"Updated Job Title Name"} */
export interface UpdateJobTitleRequest {
  name?: string | null;
}

export type PagedJobTitleRequest = PagedBaseRequest & object;

export type GetJobTitleRequest = object;

export type GetAllJobTitlesRequest = object;

export type DeleteJobTitleRequest = object;

/** @example {"name":"Job Title Name"} */
export interface CreateJobTitleRequest {
  /**
   * @minLength 2
   * @maxLength 100
   */
  name: string;
}

export interface ITRelationDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest10 = object;

export interface UpdateInvoiceRequest {
  /** @minLength 1 */
  invoiceNumber: string;
  /** @format decimal */
  invoiceAmount: number;
  /**
   * @format date-time
   * @minLength 1
   */
  invoiceDate: string;
  /** @format int32 */
  contractId: number;
  /** @format int32 */
  paymentScheduleId: number;
  /** @format binary */
  file?: File | null;
}

/** @example {"id":1,"toUserId":2,"dueDate":"2025-08-27T06:29:31.039317Z","note":"Please review this document."} */
export interface SendInvoiceToApproveRequest {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

export interface RegisterBankPaymentRequest {
  /** @format int32 */
  id: number;
  /**
   * @format date-time
   * @minLength 1
   */
  paymentDate: string;
  /** @format binary */
  file?: File;
}

export type PagedInvoicesRequest = PagedBaseRequest & object;

export type DownloadRegisterBankPaymentFile = object;

export type DownloadInvoiceAttachmentFileRequest = object;

export type DeleteInvoiceCommand = object;

export interface CreateInvoiceRequest {
  /** @minLength 1 */
  invoiceNumber: string;
  /** @format decimal */
  invoiceAmount: number;
  /**
   * @format date-time
   * @minLength 1
   */
  invoiceDate: string;
  /** @format int32 */
  contractId?: number | null;
  /** @format int32 */
  paymentScheduleId: number;
  isPaid: boolean;
  isDelivered: boolean;
  /** @format binary */
  file?: File;
  nonRegisteredContract?: NonRegisteredContractInfo | null;
}

export interface NonRegisteredContractInfo {
  contractNumber?: string;
  contractName?: string;
  /** @format int32 */
  companyId?: number;
}

export interface UpdateInvitationRequest {
  /** @format int32 */
  statusId?: number | null;
  notes?: string | null;
}

export type PagedInvitationsRequest = PagedBaseRequest & object;

export interface ToggleInternalOrganizationLockRequest {
  /** @format int32 */
  id?: number;
}

export interface PagedListOfInternalOrganizationHistoryResponseDto {
  data?: InternalOrganizationHistoryResponseDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface InternalOrganizationHistoryResponseDto {
  /** @format date-time */
  creationTime?: string;
  /** @format int32 */
  actionCode?: number;
  actionCodeName?: string;
  /** @format int32 */
  actionStatus?: number;
  actionStatusName?: string;
  creationUser?: string;
}

export type GetPagedInternalOrganizationHistoriesRequest = object;

export type GetAllInternalOrganizationsFlatQuery = object;

export interface GetInternalOrganizationDto {
  /** @format int32 */
  id?: number;
  titleAr?: string;
  titleEn?: string;
  isLocked?: boolean;
  childOrganizations?: GetInternalOrganizationDto[];
}

export type GetInternalOrganizationRequest = object;

export type DeleteInternalOrganizationCommand = object;

export interface CreateInternalOrganizationRequest {
  /**
   * @minLength 3
   * @maxLength 100
   */
  titleAr: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  titleEn: string;
  /** @format int32 */
  parentId?: number | null;
}

export interface InitiativeStrategyObjectiveDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  initiativeId?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  strategyObjectiveName?: string;
  /** @format int32 */
  strategyId?: number;
  /** @format date-time */
  creationTime?: string;
}

export type ListInitiativeStrategyObjectivesRequest = object;

export interface DeleteInitiativeStrategyObjectiveRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
}

export interface CreateInitiativeStrategyObjectiveRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  initiativeId?: number;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  strategyObjectiveId?: number;
}

export interface InitiativeStrategyObjectiveKpiDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  initiativeId?: number;
  /** @format int32 */
  strategyObjectiveKpiId?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  strategyObjectiveName?: string;
  /** @format int32 */
  kpiId?: number;
  kpiName?: string;
  /** @format decimal */
  weight?: number;
  /** @format decimal */
  actualValue?: number;
}

export type ListInitiativeStrategyObjectiveKpiRequest = object;

export interface DeleteInitiativeStrategyObjectiveKpiRequest {
  /** @format int32 */
  id?: number;
}

export interface CreateInitiativeStrategyObjectiveKpiRequest {
  /** @format int32 */
  initiativeId?: number;
  /** @format int32 */
  strategyObjectiveKpiId?: number;
}

export interface UpdateInitiativeStandardRequest {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface InitiativeStandardDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  initiativeId?: number;
  name?: string;
}

export type GetAllInitiativeStandardsRequest = object;

export type GetInitiativeStandardRequest = object;

export type DeleteInitiativeStandardRequest = object;

export interface CreateInitiativeStandardRequest {
  /** @format int32 */
  initiativeId?: number;
  name?: string;
}

export interface UpdateInitiativeStakeholderRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  initiativeId?: number;
  /** @format int32 */
  stakeholderId?: number | null;
  /** @format int32 */
  internalOrganizationId?: number | null;
}

export type ListInitiativeStakeholdersRequest = object;

export type GetInitiativeStakeholderRequest = object;

export type DeleteInitiativeStakeholderRequest = object;

export interface CreateInitiativeStakeholderRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  initiativeId?: number;
  /** @format int32 */
  stakeholderId?: number | null;
  /** @format int32 */
  internalOrganizationId?: number | null;
}

export interface UpdateInitiativeResponsibleUserRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  responsibleUserId?: number;
}

export interface UpdateInitiativeRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
  /**
   * @minLength 0
   * @maxLength 200
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  priority?: InitiativePriority | null;
  /**
   * @format decimal
   * @min 0
   */
  estimatedBudget?: number | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  technicalResources?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  estimatedHumanResources?: number | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  notes?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  responsibleOrganizationId?: number | null;
  /** @format int32 */
  parentInitiativeId?: number | null;
}

export type GetInitiativeSummaryRequest = object;

export type GetProjectsByInitiativeRequest = PagedBaseRequest & object;

export type PagedInitiativesRequest = object;

export type GetInitiativeObjectivesSummaryRequest2 = object;

export type GetInitiativeDetailsRequest = object;

export type GetInitiativeBudgetChartRequest = object;

export interface GetInitiativeDto {
  /** @format int32 */
  id?: number;
  name?: string;
  description?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  status?: InitiativeStatus;
  priority?: InitiativePriority;
  /** @format double */
  progressPercentage?: number;
  /** @format decimal */
  estimatedBudget?: number | null;
  technicalResources?: string | null;
  /** @format int32 */
  estimatedHumanResources?: number | null;
  notes?: string | null;
  /** @format int32 */
  responsibleUserId?: number | null;
  /** @format int32 */
  responsibleOrganizationId?: number | null;
}

export type GetInitiativeRequest = object;

export type DeleteInitiativeRequest = object;

export interface CreateInitiativeRequest {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description: string;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
  priority?: InitiativePriority;
  /**
   * @format decimal
   * @min 0
   */
  estimatedBudget?: number | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  technicalResources?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  estimatedHumanResources?: number | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  notes?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  responsibleOrganizationId?: number | null;
  /** @format int32 */
  parentInitiativeId?: number | null;
}

export type GetInitiativeBudgetItemsRequest = object;

export interface UpdateInitiativeOutputRequest {
  output?: string;
}

export interface UpdateProjectOutputRequest {
  output?: string;
}

export type PagedInitiativeOutputsRequest = PagedBaseRequest & object;

export interface InitiativeOutputListDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  initiativeId?: number;
  initiativeName?: string;
  output?: string;
}

export type GetListInitiativeOutputRequest = object;

export interface InitiativeOutputDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  initiativeId?: number;
  initiativeName?: string;
  output?: string;
}

export type GetInitiativeOutputRequest = object;

export type DeleteInitiativeOutputRequest = object;

export interface CreateInitiativeOutputRequest {
  /** @format int32 */
  initiativeId?: number;
  output?: string;
}

export interface UpdateInitiativeMilestoneRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
  /**
   * @minLength 0
   * @maxLength 100
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description: string;
  /** @format date-time */
  plannedDate?: string | null;
  status?: InitiativeMilestoneStatus | null;
  /** @format date-time */
  actualDate?: string | null;
}

export type ListInitiativeMilestonesRequest = object;

export interface InitiativeMilestoneDto {
  /** @format int32 */
  id?: number;
  title?: string;
  description?: string;
  /** @format date-time */
  plannedDate?: string;
  /** @format date-time */
  actualDate?: string | null;
  status?: InitiativeMilestoneStatus;
  /** @format int32 */
  initiativeId?: number;
}

export type GetInitiativeMilestoneRequest = object;

export type DeleteInitiativeMilestoneRequest = object;

export interface CreateInitiativeMilestoneRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  initiativeId?: number;
  /**
   * @minLength 0
   * @maxLength 100
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description: string;
  /**
   * @format date-time
   * @minLength 1
   */
  plannedDate: string;
}

export interface UpdateInitiativeDeliverableRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id?: number;
  /**
   * @minLength 0
   * @maxLength 200
   */
  title?: string | null;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description?: string | null;
  /** @format date-time */
  deliveryDate?: string | null;
  status?: InitiativeDeliverableStatus | null;
}

export type ListInitiativeDeliverablesRequest = object;

export interface InitiativeDeliverableDto {
  /** @format int32 */
  id?: number;
  title?: string;
  description?: string;
  /** @format date-time */
  deliveryDate?: string;
  status?: InitiativeDeliverableStatus;
  /** @format int32 */
  initiativeId?: number;
}

export type GetInitiativeDeliverableRequest = object;

export type DeleteInitiativeDeliverableRequest = object;

export interface CreateInitiativeDeliverableRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  initiativeId?: number;
  /**
   * @minLength 0
   * @maxLength 200
   */
  title: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description: string;
  /**
   * @format date-time
   * @minLength 1
   */
  deliveryDate: string;
}

export interface UpdateInitiativeDecisionRequest {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface InitiativeDecisionDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  initiativeId?: number;
  name?: string;
}

export type GetAllInitiativeDecisionsRequest = object;

export type GetInitiativeDecisionRequest = object;

export type DeleteInitiativeDecisionRequest = object;

export interface CreateInitiativeDecisionRequest {
  /** @format int32 */
  initiativeId?: number;
  name?: string;
}

export interface InitiativeKpiDetailsDto {
  kpiName?: string | null;
  /** @format decimal */
  targetValue?: number;
  unitType?: KpiUnitType;
  measurementCycle?: MeasurementCycle;
  assigneeName?: string | null;
  assigneeJobTitleName?: string | null;
  assigneePhotoPath?: string | null;
  /** @format int32 */
  linkedObjectivesCount?: number;
}

export type ListInitiativeKpisRequest = object;

export interface InitiativeKpiStatusSummaryDto {
  /** @format int32 */
  kpisOnTrackPercentage?: number;
  /** @format int32 */
  kpisAtRiskPercentage?: number;
  /** @format int32 */
  kpisAchievedPercentage?: number;
  /** @format int32 */
  kpisInProgressPercentage?: number;
  /** @format int32 */
  kpisCompletedPercentage?: number;
  /** @format int32 */
  kpisGreenPercentage?: number;
  /** @format int32 */
  kpisYellowPercentage?: number;
  /** @format int32 */
  kpisRedPercentage?: number;
}

export type GetInitiativeKpiStatusSummaryRequest = object;

export interface StrategyObjectivesDto {
  /** @format int32 */
  id?: number;
  name?: string;
  status?: StrategyObjectiveStatus;
  code?: string | null;
  statusName?: string;
  progressIndicator?: ProgressIndicator;
  canBeDeleted?: boolean;
  /** @format decimal */
  completionRatio?: number;
  kpis?: StrategyObjectivesItemKpiDto[];
}

export interface StrategyObjectivesItemKpiDto {
  /** @format int32 */
  kpiId?: number;
  kpiName?: string;
  /** @format decimal */
  weight?: number;
  kpiCode?: string | null;
  /** @format decimal */
  progressPercentage?: number;
  progressIndicator?: ProgressIndicator;
}

export type GetInitiativeStrategyObjectivesRequest = object;

export interface UpdateInitiativeBudgetItemRequest {
  /** @format int32 */
  accountId?: number | null;
  /** @format decimal */
  amount?: number | null;
}

export type PagedInitiativeBudgetItemRequest = PagedBaseRequest & object;

export type GetAllInitiativeBudgetItemsRequest = object;

export type GetInitiativeBudgetItemRequest = object;

export type DeleteInitiativeBudgetItemRequest = object;

export interface CreateInitiativeBudgetItemRequest {
  /** @format int32 */
  initiativeId?: number;
  /** @format int32 */
  accountCombinationId?: number;
  /** @format decimal */
  amount?: number;
}

export interface UpdateFunctionDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format date-time */
  lastModificationTime?: string;
}

export interface UpdateFunctionRequest {
  /**
   * @minLength 0
   * @maxLength 100
   */
  name: string;
}

export type GetPagedFunctionsRequest = PagedBaseRequest & object;

export interface FunctionListDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetAllFunctionsRequest = object;

export type DeleteFunctionRequest = object;

export interface CreateFunctionDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface CreateFunctionRequest {
  /**
   * @minLength 0
   * @maxLength 100
   */
  name: string;
  /** @pattern ^[0-9]{7}$ */
  code?: string;
}

export type PagedFinancialYearsRequest = PagedBaseRequest & object;

export type ListFinancialYearsRequest = object;

export type CreateFinancialYearsRequest = PagedBaseRequest & {
  name?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  description?: string | null;
  isCurrent?: boolean;
};

export interface UpdateExternalOrganizationCommand {
  titleAr?: string;
  titleEn?: string;
}

export type GetAllExternalOrganizationsFlatQuery = object;

export type GetAllExternalOrganizationsQuery = object;

export interface GetExternalOrganizationDto {
  /** @format int32 */
  id?: number;
  titleAr?: string;
  titleEn?: string;
  childOrganizations?: GetExternalOrganizationDto[];
}

export type GetExternalOrganizationRequest = object;

export type DeleteExternalOrganizationCommand = object;

export interface CreateExternalOrganizationRequest {
  /**
   * @minLength 3
   * @maxLength 100
   */
  titleAr: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  titleEn: string;
  /** @format int32 */
  parentId?: number | null;
}

export interface UpdateExpectedResultRequest {
  content?: string | null;
  isAchieved?: boolean | null;
  /** @format date-time */
  achivedDate?: string | null;
}

export interface PagedListOfPagedExpectedResultDto {
  data?: PagedExpectedResultDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PagedExpectedResultDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  content?: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
  canBeDeleted?: boolean;
}

export type PagedExpectedResultsRequest = PagedBaseRequest & object;

export type MakeExpectedResultAchievedRequest = object;

export interface ExpectedResultDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  strategyObjectiveId?: number;
  content?: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
}

export type GetListExpectedResultsRequest = object;

export interface ExpectedResultDto2 {
  /** @format int32 */
  id?: number;
  content?: string;
  isAchieved?: boolean;
  /** @format date-time */
  achievedDate?: string | null;
}

export type GetExpectedResultsByStrategyObjectiveRequest = object;

export type GetExpectedResultRequest = object;

export type DeleteExpectedResultRequest = object;

export interface CreateExpectedResultRequest {
  /** @format int32 */
  strategyObjectiveId?: number;
  content?: string;
}

export interface UpdateEntitiesTagsRequest {
  /** @format int32 */
  tagId?: number;
  /** @format int32 */
  tenderId?: number | null;
  /** @format int32 */
  attachmentId?: number | null;
}

export type PagedEntitiesTagRequest = PagedBaseRequest & object;

export type GetEntitiesTagsRequest = object;

export type DeleteEntitiesTagRequest = object;

export interface CreateEntitiesTagRequest {
  /** @format int32 */
  tagId?: number;
  /** @format int32 */
  tenderId?: number | null;
  /** @format int32 */
  attachmentId?: number | null;
}

export type PagedDurationTypesRequest = PagedBaseRequest & object;

export type ListDurationTypesRequest = object;

export interface DevelopmentProgramDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest11 = object;

export interface DevelopmentPlanProjectGoalDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  projectId?: number;
}

export type GetListRequest12 = object;

export interface DevelopmentPlanGoalDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest13 = object;

export interface DevelopmentalClassificationDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest14 = object;

export type GetTenderTypesTotalsRequest = object;

export type GetTenderTypesCountsRequest = object;

export type GetTenderTypesStatisticsRequest = object;

export type GetTenderTypesBudgetRequest = object;

export type GetTenderPhasesTotalsRequest = object;

export type GetTenderYearSummaryRequest = object;

export type GetLoggedUserImportantDatesRequest = object;

export interface UpdateCurrencyRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  sortOrder?: number | null;
}

export interface CurrencyDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  sortOrder?: number | null;
}

export type GetCurrencyByIdRequest = object;

export type GetAllCurrenciesRequest = object;

export type DeleteCurrencyRequest = object;

export interface CreateCurrencyRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  sortOrder?: number;
}

export type PagedContractTypesRequest = PagedBaseRequest & object;

export type Stream = MarshalByRefObject & {
  canTimeout?: boolean;
  /** @format int32 */
  readTimeout?: number;
  /** @format int32 */
  writeTimeout?: number;
};

export type MarshalByRefObject = object;

export type DownloadTemplateRequest = object;

export interface UpdateContractDeliveryScheduleRequest {
  notes?: string | null;
  isTimeDuration?: boolean | null;
  isDelivered?: boolean | null;
  /** @format int32 */
  durationValue?: number | null;
  durationTypeCode?: DurationTypeCodes | null;
  /** @format date-time */
  deliveryDate?: string | null;
}

export type ListContractDeliverySchedulesRequest = object;

export type DeleteContractDeliveryScheduleRequest = object;

export interface CreateContractDeliveryScheduleRequest {
  /** @format int32 */
  contractId?: number;
  notes?: string;
  isTimeDuration?: boolean;
  /** @format int32 */
  durationValue?: number | null;
  durationTypeCode?: DurationTypeCodes | null;
  /** @format date-time */
  deliveryDate?: string | null;
  isDelivered?: boolean;
}

export interface UploadContractPdfRequest {
  /** @format binary */
  file?: File;
}

export interface UpdateContractPaymentRequest {
  /** @format decimal */
  price?: number | null;
  /** @format decimal */
  percentage?: number | null;
  /**
   * @format date-time
   * @minLength 1
   */
  dueDate: string;
  /** @maxLength 500 */
  description?: string;
  deliverySchedulesIDs?: number[] | null;
  accountsCombinations: AccountsCombinationItem[];
}

export interface AccountsCombinationItem {
  /** @format int32 */
  id?: number;
  /** @format decimal */
  amount?: number;
}

export interface UpdateContractPartiesRequest {
  /** @format int32 */
  contractId?: number;
  firstPartyRepRole?: string | null;
  /** @format int32 */
  firstPartyRepId?: number | null;
  secondPartyRepName?: string | null;
  secondPartyRepRole?: string | null;
  secondPartyRepCivilId?: string | null;
  secondPartyRepPostalCode?: string | null;
  secondPartyRepEmail?: string | null;
  secondPartyRepPhone?: string | null;
  secondPartyRepFax?: string | null;
  /** @format int32 */
  secondPartyId?: number | null;
}

export interface UpdateContractMonitorsRequest {
  /** @format int32 */
  contractId?: number;
  monitors?: CreateMonitorDto[];
  relatedContractStatus?: ContractStatus | null;
  /** @format int32 */
  relatedContractId?: number | null;
  classificationIds?: number[] | null;
}

export interface CreateMonitorDto {
  /** @format int32 */
  monitorId?: number;
  monitorType?: ContractMonitorType;
}

export interface UpdateContractAccountCombinationRequest {
  /** @format int32 */
  accountCombinationId?: number;
}

export interface UpdateContractRequest {
  /**
   * @minLength 0
   * @maxLength 100
   */
  contractNumber?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  name?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  description?: string | null;
  contractType?: ContractType | null;
  /**
   * @format decimal
   * @min 0
   */
  contractValue?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format int32 */
  durationType?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationQuentity?: number | null;
  /** @format int32 */
  tenderId?: number | null;
  /** @format int32 */
  subCategoryId?: number | null;
  /**
   * @minLength 0
   * @maxLength 200
   */
  tenderName?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  tenderNumber?: string | null;
}

/** @example {"contractId":1,"toUserId":2,"dueDate":"2025-08-27T06:29:31.1563082Z","note":"Please review this contract"} */
export interface SendContractToReviewRequest {
  /** @format int32 */
  contractId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

/** @example {"contractId":1,"toUserId":2,"dueDate":"2025-08-27T06:29:31.1572315Z","note":"Please review and approve this contract"} */
export interface SendContractToApproveRequest {
  /** @format int32 */
  contractId?: number;
  /** @format int32 */
  toUserId?: number;
  /** @format date-time */
  dueDate?: string;
  note?: string | null;
}

export interface PagedListOfPagedContractDto {
  data?: PagedContractDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface PagedContractDto {
  /** @format int32 */
  id?: number;
  number?: string;
  name?: string;
  description?: string;
  /** @format date-time */
  date?: string;
  /** @format date-time */
  endDate?: string;
  /** @format decimal */
  value?: number;
  /** @format decimal */
  paidAmount?: number;
  status?: ContractStatus;
  canBeDeleted?: boolean;
}

export type GetPagedContractsRequest = PagedBaseRequest & object;

export interface ContractListDto {
  /** @format int32 */
  id?: number;
  contractNumber?: string;
  description?: string;
  name?: string;
  companyName?: string;
  /** @format int32 */
  companyId?: number;
  /** @format decimal */
  contractValue?: number;
  /** @format decimal */
  paidAmount?: number;
  status?: ContractStatus;
}

export type ListContractsRequest = object;

export type GetContractPaymentDetailsRequest = object;

export interface ContractPaymentDto {
  /** @format decimal */
  paymentAmount?: number;
  description?: string;
  /** @format date-time */
  dueDate?: string;
}

export type GetContractPaymentsRequest = object;

export type GetContractsExcludeDraftRequest = object;

export interface ContractPaymentSchedulesDto {
  /** @format int32 */
  contractId?: number;
  payments?: PaymentScheduleDto[];
}

export interface PaymentScheduleDto {
  /** @format int32 */
  id?: number;
  /** @format decimal */
  paymentAmount?: number;
  /** @format date-time */
  dueDate?: string;
  description?: string;
  /** @format int32 */
  paymentScheduleDeliverablesCount?: number;
  /** @format int32 */
  paymentScheduleAccountCombinationsCount?: number;
}

export type GetContractPaymentSchedulesRequest = object;

export interface ContractPartiesDto {
  agencyName?: string;
  secondPartyDetails?: GetSecondPartyDetailsDto;
  firstPartyDetails?: GetFirstPartyDetailsDto;
}

export interface GetSecondPartyDetailsDto {
  secondPartyRepName?: string | null;
  secondPartyRepRole?: string | null;
  secondPartyRepCivilId?: string | null;
  secondPartyRepPostalCode?: string | null;
  secondPartyRepEmail?: string | null;
  secondPartyRepPhone?: string | null;
  secondPartyRepFax?: string | null;
  secondPartyCompanyNameAr?: string | null;
}

export interface GetFirstPartyDetailsDto {
  firstPartyRepRole?: string | null;
  firstPartyRepName?: string | null;
  firstPartyRepJobTitle?: string | null;
}

export type GetContractPartiesRequest = object;

export interface ContractMonitorsDto {
  /** @format int32 */
  contractId?: number;
  monitors?: MonitorDto[];
}

export interface MonitorDto {
  contractMonitorType?: ContractMonitorType;
  arabicFullName?: string;
  jobTitleName?: string;
}

export type GetContractMonitorsRequest = object;

export type GetContractExtensionFileRequest = object;

export interface ContractDeliverySchedulesDto {
  /** @format int32 */
  contractId?: number;
  schedules?: DeliveryScheduleDto[];
}

export interface DeliveryScheduleDto {
  /** @format int32 */
  id?: number;
  notes?: string;
  /** @format date-time */
  deliveryDate?: string;
  isTimeDuration?: boolean;
  isDelivered?: boolean;
  /** @format int32 */
  durationValue?: number | null;
  durationTypeCode?: DurationTypeCodes | null;
}

export type GetContractDeliverySchedulesRequest = object;

export interface ContractClassificationDto {
  /** @format int32 */
  id?: number;
  classificationName?: string;
  /** @format int32 */
  classificationId?: number;
}

export type GetContractClassificationsRequest = object;

export type GetContractAccountCombinationRequest = object;

export interface ContractDetailsDto {
  /** @format int32 */
  id?: number;
  contractNumber?: string;
  contractName?: string;
  description?: string;
  contractType?: ContractType;
  /** @format decimal */
  contractValue?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  status?: ContractStatus;
  /** @format int32 */
  tenderId?: number | null;
}

export type GetContractByIdRequest = object;

export interface AvailableTenderDto {
  /** @format int32 */
  id?: number;
  titleEn?: string;
  titleAr?: string;
}

export type GetAvailableTendersRequest = object;

export type GetContractWordFileRequest = object;

export type DownloadContractPdfRequest = object;

export type DownloadContractAttachmentRequest = object;

export type DeleteContractPaymentRequest = object;

export type DeleteContractClassificationRequest = object;

export type DeleteContractRequest = object;

export interface CreateContractPaymentRequest {
  /** @format decimal */
  price?: number | null;
  /** @format decimal */
  percentage?: number | null;
  /**
   * @format date-time
   * @minLength 1
   */
  dueDate: string;
  /** @maxLength 500 */
  description?: string;
  deliverySchedulesIDs?: number[] | null;
  accountsCombinationsItems?: AccountsCombinationItem2[];
}

export interface AccountsCombinationItem2 {
  /** @format int32 */
  id?: number;
  /** @format decimal */
  amount?: number;
}

export interface CreateContractClassificationRequest {
  /** @format int32 */
  classificationId?: number;
}

export interface CreateContractAttachmentContractRequest {
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface CreateContractRequest {
  /**
   * @minLength 0
   * @maxLength 20
   */
  contractNumber: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  description: string;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  name: string;
  contractType: ContractType;
  /** @format decimal */
  contractValue: number;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  durationQuantity: number;
  /** @minLength 1 */
  durationType: DurationTypeCodes;
  tenderName?: string | null;
  tenderNumber?: string | null;
  /** @format int32 */
  tenderId?: number | null;
  /** @format int32 */
  subCategoryId?: number | null;
}

export interface RenewalRequiredContractsDto {
  /** @format date-time */
  endDate?: string;
  title?: string | null;
}

export type NeedRenewalRequest = object;

export type ExpiringInThreeMonthsRequest = object;

export type ExpiringInOneMonthRequest = object;

export interface ContractStatusSummaryDto {
  /** @format int32 */
  totalContracts?: number;
  /** @format int32 */
  inProgressContracts?: number;
  /** @format int32 */
  draftContracts?: number;
  /** @format int32 */
  reviewingContracts?: number;
  /** @format int32 */
  completedContracts?: number;
}

export type ContractStatusSummaryRequest = object;

export interface ContractPaymentRatioDto {
  /** @format decimal */
  underReviewContractsRatio?: number;
  /** @format decimal */
  completedContractsRatio?: number;
  /** @format decimal */
  underImplementationContractsRatio?: number;
  /** @format decimal */
  draftContractsRatio?: number;
  /** @format decimal */
  totalContractAmount?: number;
  /** @format decimal */
  totalPaidAmount?: number;
}

export type ContractPaymentRatioRequest = object;

export interface ContractFinancialSummaryDto {
  /** @format decimal */
  totalContractAmounts?: number;
  /** @format decimal */
  totalRenewalAmounts?: number;
  /** @format decimal */
  totalRemainingAmounts?: number;
  /** @format decimal */
  totalPaidAmounts?: number;
}

export type ContractFinancialSummaryRequest = object;

export interface UpdateContractRequestRequest {
  /** @format int32 */
  contractId?: number | null;
  contractName?: string | null;
  contractNumber?: string | null;
  /** @format decimal */
  contractValue?: number;
  /** @format int32 */
  organizationId?: number | null;
  status?: ContractRequestStatus;
  duration?: DurationTypeCodes | null;
  /** @format int32 */
  durationValue?: number | null;
}

export interface PagedListOfContractRequestPagedDTO {
  data?: ContractRequestPagedDTO[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ContractRequestPagedDTO {
  /** @format int32 */
  id?: number;
  contractName?: string;
  contractNumber?: string;
  /** @format date-time */
  requestDateUTC?: string;
  /** @format decimal */
  contractAmount?: number;
  requesterName?: string;
  beneficiaryUnit?: string;
  status?: ContractRequestStatus;
  canBeDeleted?: boolean;
  /** @format date-time */
  requestDate?: string;
}

export type PagedContractRequestsRequest = object;

export interface ContractRequestDto {
  /** @format int32 */
  id?: number;
  contractName?: string;
  contractNumber?: string;
  /** @format date-time */
  requestDate?: string;
  /** @format decimal */
  contractAmount?: number;
  requesterName?: string;
  beneficiaryUnit?: string;
  status?: ContractRequestStatus;
  canBeDeleted?: boolean;
  duration?: DurationTypeCodes | null;
  /** @format int32 */
  durationValue?: number | null;
  /** @format int32 */
  beneficiaryUnitId?: number | null;
  /** @format int32 */
  contractId?: number | null;
  isRegistered?: boolean;
  hasContract?: boolean;
}

export type GetById = object;

export type DeleteContractRequestRequest = object;

export interface CreateContractRequestRequest {
  /** @format int32 */
  contractId?: number | null;
  contractName?: string | null;
  contractNumber?: string | null;
  /** @format decimal */
  contractValue?: number;
  /** @format int32 */
  organizationId?: number;
  status?: ContractRequestStatus;
  duration?: DurationTypeCodes;
  /** @format int32 */
  durationValue?: number;
}

export type GetContractRequestJustificationsRequest = object;

export interface UpdateContractRequestJustificationRequest {
  /** @minLength 1 */
  justification: string;
}

export interface UpdateContractRequestItemRequest {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  contractRequestId?: number;
  /** @format decimal */
  price?: number;
}

export interface PagedListOfContractRequestItemPagedDTO {
  data?: ContractRequestItemPagedDTO[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ContractRequestItemPagedDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  accountName?: string;
  accountCode?: string;
  /** @format int32 */
  contractRequestId?: number;
  /** @format decimal */
  price?: number;
  canBeDeleted?: boolean;
}

export type PagedContractRequestItemsRequest = object;

export type DeleteContractRequestItemRequest = object;

export interface CreateContractRequestItemRequest {
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  contractRequestId?: number;
  /** @format decimal */
  price?: number;
}

export interface UpdateContractAttachmentRequest {
  fileName?: string;
  /** @format int32 */
  attachmentTypeId?: number;
}

export type ListContractRequestAttachmentsRequest = object;

export type DownloadContractRequestAttachmentFileRequest = object;

export type DeleteContractRequestFileRequest = object;

export interface AddContractRequestFileRequest {
  /** @minLength 1 */
  fileName: string;
  /** @format int32 */
  attachmentTypeId: number;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface UpdateContractPenalityRequest {
  /** @format int32 */
  penalityId: number;
  /** @format int32 */
  contractId?: number | null;
  /** @format decimal */
  amount?: number | null;
  cause?: string | null;
  notes?: string | null;
  /** @format date-time */
  penalityDate?: string | null;
}

export interface PagedListOfContractPenalityDto {
  data?: ContractPenalityDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ContractPenalityDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  contractId?: number;
  /** @format decimal */
  amount?: number;
  cause?: string;
  notes?: string | null;
  /** @format date-time */
  penalityDate?: string;
  /** @format date-time */
  creationTime?: string;
}

export type PagedContractPenalitiesRequest = object;

export type GetContractPenalityRequest = object;

export type DeleteContractPenalityRequest = object;

export interface CreateContractPenalityRequest {
  /** @format int32 */
  contractId: number;
  /** @format decimal */
  amount: number;
  /** @minLength 1 */
  cause: string;
  /**
   * @format date-time
   * @minLength 1
   */
  penalityDate: string;
  notes?: string | null;
}

export type ListContractClauseVersionsRequest = object;

export interface UpdateContractClausesRequest {
  /** @format int32 */
  contractId: number;
  /** @format int32 */
  contractDefaultClauseId: number;
  /** @minLength 1 */
  content: string;
}

export interface SetCurrentVersionRequest {
  /** @format int32 */
  versionId: number;
}

export type ListContractDefaultClausesRequest = object;

export type ListContractClausesRequest = object;

export interface UpdateContractChangeOrderRequest {
  changeOrderType?: ChangeOrderType | null;
  /** @format decimal */
  changePercentage?: number | null;
}

export type PagedContractChangeOrdersRequest = PagedBaseRequest & object;

export type GetContractChangeOrderByIdRequest = object;

export type DeleteContractChangeOrderRequest = object;

export interface CreateContractChangeOrderRequest {
  /** @format int32 */
  contractId: number;
  changeOrderType: ChangeOrderType;
  /** @format decimal */
  changePercentage: number;
}

export interface ContractCategoryWithSubCategoriesDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  code?: ContractCategoryCodes;
  subCategories?: ContractSubCategoryDto[];
}

export interface ContractSubCategoryDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  code?: ContractSubCategoryCodes;
  tenderTypeCode?: TenderTypeCodes;
}

export type ListContractCategoriesRequest = object;

export interface ChangeContractSubCategoryTemplateRequest {
  /**
   * @format binary
   * @minLength 1
   */
  template: File;
}

export interface UpdateContractAttachmentRequest2 {
  fileName?: string;
  fileDesc?: string;
  /** @format int32 */
  attachmentTypeId?: number;
}

export type ListContractAttachmentsRequest = object;

export type DownloadContractAttachmentFileRequest = object;

export type DeleteContractFileRequest = object;

export interface AddContractFileRequest {
  /** @minLength 1 */
  fileName: string;
  /** @format int32 */
  attachmentTypeId: number;
  fileDesc?: string | null;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface PagedListOfContractActionLogDto {
  data?: ContractActionLogDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ContractActionLogDto {
  /** @format int64 */
  id?: number;
  /** @format int32 */
  contractId?: number;
  newValue?: string | null;
  oldValue?: string | null;
  /** @format date-time */
  actionTime?: string;
  actionType?: ContractActionType;
  creatorName?: string;
}

export type PagedContractActionLogsRequest = object;

export interface UpdateCompanyOfferRequest {
  /** @format int32 */
  companyId?: number | null;
  /** @format decimal */
  totalPrice?: number | null;
  /** @format int32 */
  currencyTypeId?: number | null;
  /** @format int32 */
  duration?: number | null;
  /** @format int32 */
  durationTypeId?: number | null;
}

export type GetAwardedOfferRequest = object;

export interface AwardCompanyOfferRequest {
  /** @format int32 */
  companyOfferId?: number;
  /** @format int32 */
  tenderId?: number;
  /** @format date-time */
  actionDate?: string;
  note?: string | null;
}

export interface UpdateCompanyOfferEvaluationRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  companyOfferId: number;
  /** @minLength 1 */
  evaluations: CompanyOfferEvaluationItemRequest[];
}

export interface CompanyOfferEvaluationItemRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderEvaluationId: number;
  /**
   * @format decimal
   * @min 0
   * @max 5
   */
  score: number;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  notes?: string | null;
}

export type ListCompanyOfferEvaluationsRequest = object;

export type ExportToExcelCompanyOfferEvaluationsRequest = object;

export interface CreateCompanyOfferEvaluationRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  companyOfferId: number;
  /** @minLength 1 */
  evaluations: CompanyOfferEvaluationItemRequest2[];
}

export interface CompanyOfferEvaluationItemRequest2 {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  tenderEvaluationId: number;
  /**
   * @format decimal
   * @min 0
   * @max 5
   */
  score: number;
  /**
   * @minLength 0
   * @maxLength 1000
   */
  notes?: string | null;
}

export interface UpdateCompanyRequest {
  nameAr?: string;
  nameEn?: string;
  emailAddress?: string;
}

export interface PagedListOfPagedCompanyEntity {
  data?: PagedCompanyEntity[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedCompanyEntity = BasePagedDto & {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  emailAddress?: string;
};

export type PagedCompanyRequest = object;

export interface ListCompanyEntity {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetAllCompaniesRequest = object;

export interface CompanyDto {
  /** @format int32 */
  id?: number;
  nameAr?: string;
  nameEn?: string;
  emailAddress?: string;
}

export type DeleteCompanyRequest = object;

export interface CreateCompanyRequest {
  /**
   * @minLength 3
   * @maxLength 100
   */
  nameAr: string;
  /**
   * @minLength 3
   * @maxLength 100
   */
  nameEn: string;
  /**
   * @format email
   * @minLength 1
   */
  emailAddress: string;
}

export type PagedCommitteeMeetingTopicsRequest = PagedBaseRequest & object;

export type DeleteCommitteMeetingTopicRequest = object;

export interface CreateCommitteMeetingTopicRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  title: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  meetingId: number;
  description?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  durationInMins?: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  sequenceOrder?: number;
}

export type PagedCommitteeMeetingAttendeesRequest = PagedBaseRequest & object;

export type DeleteCommitteMeetingAttendeeRequest = object;

export type ListMeetingAttendeesRequest = object;

export type PagedMeetingAttendeesRequest = PagedBaseRequest & object;

export interface CreateCommitteMeetingAttendeeRequest {
  /**
   * @minLength 0
   * @maxLength 255
   */
  name: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  meetingId: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userId: number;
  /**
   * @minLength 0
   * @maxLength 500
   */
  notes?: string | null;
}

export interface ListCommitteeTypeEntity {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetAllCommitteeTypesRequest = object;

export interface UpdateEndCommitteeRequest {
  /** @format date-time */
  endDate?: string;
}

/** @example {"attachmentId":456,"webPath":"/uploads/tenders/document-file"} */
export interface UpdateCommitteeWebPathRequest {
  /** @format int32 */
  attachmentId?: number;
  /** @minLength 1 */
  webPath: string;
}

/** @example {"attachmentId":456,"fileName":"UpdatedMeetingFile"} */
export interface UpdateCommitteeFileNameRequest {
  /** @format int32 */
  attachmentId?: number;
  fileName?: string;
}

export interface UpdateCommitteeFileRequest {
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface UpdateCommitteeRequest {
  /** @maxLength 200 */
  name?: string | null;
  /** @format int32 */
  committeeTypeId?: number | null;
  /** @maxLength 500 */
  description?: string | null;
  /** @format date-time */
  startDate?: string | null;
}

export interface PagedListOfPagedCommitteeFileEntity {
  data?: PagedCommitteeFileEntity[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedCommitteeFileEntity = BasePagedDto & {
  /** @format int32 */
  id?: number;
  fileName?: string;
  fileDesc?: string;
  attachmentType?: string | null;
  /** @format int32 */
  versionNumber?: number | null;
  /** @format date-time */
  modificationTime?: string | null;
  modifierUser?: ModifierUser | null;
  creatorUser?: CreatorUserDto | null;
  hasWebPath?: boolean;
  webPath?: string | null;
};

export interface ModifierUser {
  /** @format int32 */
  id?: number | null;
  fullName?: string | null;
  jobTitleName?: string | null;
  photoPath?: string | null;
}

export interface CreatorUserDto {
  /** @format int32 */
  id?: number | null;
  fullName?: string | null;
  jobTitleName?: string | null;
  photoPath?: string | null;
}

export type PagedCommitteeFileRequest = PagedBaseRequest & object;

export interface PagedListOfPagedCommitteeItem {
  data?: PagedCommitteeItem[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type PagedCommitteeItem = BasePagedDto & {
  /** @format int32 */
  id?: number;
  name?: string;
  committeeType?: string;
  tenderTitle?: string;
  status?: boolean;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string | null;
  hasAttachments?: boolean;
  chairmanName?: string | null;
  chairmanJobTitle?: string | null;
  chairmanPhotoUrl?: string | null;
};

export type PagedCommitteesRequest = object;

export interface ListCommitteeEntity {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type ListCommitteesRequest = object;

export interface CommitteeTenderDTO {
  /** @format int32 */
  tenderId?: number;
  /** @format int32 */
  committeeId?: number;
  title?: string;
  number?: string | null;
}

export type GetCommitteeTendersRequest = object;

export interface CommitteeDto {
  /** @format int32 */
  id?: number;
  name?: string;
  /** @format int32 */
  tenderId?: number;
  tenderName?: string | null;
  /** @format int32 */
  committeeTypeId?: number;
  description?: string | null;
  isActive?: boolean;
  notes?: string | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
}

export type GetCommitteeRequest = object;

export type DownloadCommitteeFileRequest = object;

export type DeleteCommitteeFileRequest = object;

export type DeleteCommitteeRequest = object;

/** @example {"name":"Committee Name","committeeTypeId":1,"description":"Committee Description","notes":"Committee Notes","startDate":"2025-08-20T06:29:31.2678919Z"} */
export interface CreateCommitteeRequest {
  /**
   * @minLength 0
   * @maxLength 200
   */
  name: string;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  committeeTypeId?: number;
  description?: string | null;
  notes?: string | null;
  /** @format date-time */
  startDate?: string | null;
}

/** @example {"tenderCommitteeId":123,"fileName":"File.pdf","attachmentTypeId":0,"fileDesc":"File description","physicalFile":null,"webPath":"/uploads/committee/files"} */
export interface AddCommitteeFileRequest {
  /** @format int32 */
  tenderCommitteeId?: number;
  /** @minLength 1 */
  fileName: string;
  /** @format int32 */
  attachmentTypeId?: number;
  /** @minLength 1 */
  fileDesc: string;
  /** @format binary */
  physicalFile?: File | null;
  webPath?: string | null;
}

export interface UpdateClassificationRequest {
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface ClassificationDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type ListClassificationsRequest = object;

export type DeleteClassificationRequest = object;

export interface CreateClassificationRequest {
  /** @minLength 1 */
  name: string;
}

export interface BudgetPlanPolicyDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest15 = object;

export type GetPagedUnifiedHistoriesRequest = PagedBaseRequest & object;

export interface BudgetContractItemDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  contractId?: number;
  /** @format decimal */
  price?: number;
  accountName?: string;
  /** @format int32 */
  accountCombinationId?: number;
}

export type GetList = object;

export interface EditBudgetContractItemRequest {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  contractId?: number;
  /** @format decimal */
  price?: number;
}

export interface PagedListOfContractItemPagedDTO {
  data?: ContractItemPagedDTO[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface ContractItemPagedDTO {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  accountId?: number;
  accountName?: string;
  accountCode?: string;
  /** @format int32 */
  contractId?: number;
  /** @format decimal */
  price?: number;
  canBeDeleted?: boolean;
}

export type PagedContractItemsRequest = object;

export type DeleteContractItemRequest = object;

export interface CreateContractItemRequest {
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  contractId?: number;
  /** @format decimal */
  price?: number;
}

export interface UpdateRequest4 {
  name?: string;
}

export type PagedBanksRequest = PagedBaseRequest & object;

export interface BankDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetListRequest16 = object;

export interface CreateBankRequest {
  /** @minLength 1 */
  name: string;
}

export interface UpdateBankGuaranteeRequest {
  /** @format int32 */
  id: number;
  /** @format int32 */
  bankId?: number | null;
  /** @format int32 */
  contractId?: number | null;
  guaranteeNumber?: string | null;
  status?: GuaranteeStatus | null;
  /** @format decimal */
  invoiceAmount?: number | null;
  /** @format date-time */
  startDate?: string | null;
  /** @format date-time */
  endDate?: string | null;
  /** @format date-time */
  guaranteeLetterDate?: string | null;
  /** @format binary */
  file?: File | null;
}

export type PagedBankGuaranteesRequest = PagedBaseRequest & object;

export interface BankGuaranteeDetailsDto {
  /** @format int32 */
  id?: number;
  /** @format decimal */
  invoiceAmount?: number;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  contractId?: number | null;
  contractName?: string;
  contractNumber?: string;
  guaranteeNumber?: string;
  status?: GuaranteeStatus;
  /** @format date-time */
  guaranteeLetterDate?: string;
  /** @format int32 */
  bankId?: number;
  bankName?: string;
}

export type GetBankGuaranteeByIdRequest = object;

export type DownloadBankGuaranteeAttachmentRequest = object;

export type DeleteBankGuranteeRequest = object;

export interface CreateBankGuaranteeRequest {
  /** @format int32 */
  contractId?: number | null;
  contractNum?: string | null;
  contractName?: string | null;
  /** @format int32 */
  bankId: number;
  /** @format int32 */
  companyId: number;
  /** @format decimal */
  invoiceAmount: number;
  /** @minLength 1 */
  guaranteeNumber: string;
  /**
   * @format date-time
   * @minLength 1
   */
  guaranteeLetterDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  startDate: string;
  /**
   * @format date-time
   * @minLength 1
   */
  endDate: string;
  guaranteeStatus: GuaranteeStatus;
  /**
   * @format binary
   * @minLength 1
   */
  file: File;
}

export interface BalancedScorecardPerspectiveListDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export type GetAllBalancedScorecardPerspectivesRequest = object;

export interface LoginResponse {
  /** @format int32 */
  id?: number;
  fullName?: string | null;
  emailAddres?: string | null;
  rolesNames?: string[] | null;
  permissionsNames?: string[] | null;
  accessToken?: string | null;
  jobTitleName?: string | null;
  userPhotoUrl?: string | null;
  enforceChangePasswordNextLogin?: boolean;
}

/** @example {"email":"testrassul3@mof.gov.kw","password":"MOFpa@sssT2025#"} */
export interface LoginRequest {
  email?: string;
  password?: string;
}

/** @example {"nameAr":"نوع مرفق محدث","nameEn":"Updated Attachment Type"} */
export interface UpdateAttachmentTypeRequest {
  nameAr?: string | null;
  nameEn?: string | null;
}

export type GetAttachmentTypeRequest = object;

export type DeleteAttachmentTypeRequest = object;

/** @example {"nameAr":"نوع المرفق","nameEn":"Attachment Type"} */
export interface CreateAttachmentTypeRequest {
  /** @minLength 1 */
  nameAr: string;
  /** @minLength 1 */
  nameEn: string;
}

export interface UpdateServiceRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  categoryId?: number;
}

export type PagedServicesRequest = PagedBaseRequest & object;

export type GetAllServicesRequest = object;

export type GetServiceRequest = object;

export type DeleteServiceRequest = object;

export type DeactivateServiceRequest = object;

export interface CreateServiceRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  categoryId?: number;
}

export type ActivateServiceRequest = object;

export interface UpdateTechGroupServiceCategoryRequest {
  /** @format int32 */
  techGroupId?: number;
}

export interface UpdateOrderServiceCategoryRequest {
  /** @format int32 */
  order?: number;
}

export interface UpdateServiceCategoryRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  order?: number | null;
  /** @format int32 */
  techGroupId?: number;
  isGeneral?: boolean;
}

export type PagedServiceCategoriesRequest = PagedBaseRequest & object;

export type GetAllServiceCategoriesRequest = object;

export type GetServiceCategoryRequest = object;

export type DeleteServiceCategoryRequest = object;

export interface CreateServiceCategoryRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  techGroupId?: number;
  /** @format int32 */
  order?: number | null;
  isGeneral?: boolean;
}

export interface AssignAdminServiceCategoryRequest {
  /** @format int32 */
  adminId?: number;
}

export interface UpdateAssetRequestTypeRequest {
  nameAr?: string;
  nameEn?: string;
}

export type PagedAssetRequestTypesRequest = PagedBaseRequest & object;

export type GetAllAssetRequestTypesRequest = object;

export type GetAssetRequestTypeRequest = object;

export type DeleteAssetRequestTypeRequest = object;

export interface CreateAssetRequestTypeRequest {
  nameAr?: string;
  nameEn?: string;
}

export interface UpdateAssetRequestStatusRequest {
  nameAr?: string;
  nameEn?: string;
}

export type PagedAssetRequestStatusesRequest = PagedBaseRequest & object;

export type GetAllAssetRequestStatusesRequest = object;

export type GetAssetRequestStatusRequest = object;

export type DeleteAssetRequestStatusRequest = object;

export interface CreateAssetRequestStatusRequest {
  nameAr?: string;
  nameEn?: string;
}

export interface UpdateAssetRequestStatusRequest2 {
  /** @format int32 */
  statusId?: number;
}

export interface UpdateAssetRequestRequest {
  note?: string | null;
  /** @format int32 */
  toUserId?: number | null;
  /** @format int32 */
  toOrgUnitId?: number | null;
  /** @format int32 */
  requesterId?: number | null;
  /** @format int32 */
  requestTypeId?: number | null;
  /** @format int32 */
  fromOrgUnitId?: number | null;
  /** @format int32 */
  inventoryUserId?: number | null;
  /** @format int32 */
  requestStatusId?: number;
}

export type PagedAssetRequestsRequest = PagedBaseRequest & object;

export type GetAssetRequestRequest = object;

export type DeleteAssetRequestRequest = object;

export interface CreateAssetRequestRequest {
  note?: string | null;
  /** @format int32 */
  toUserId?: number | null;
  /** @format int32 */
  toOrgUnitId?: number | null;
  /** @format int32 */
  requesterId?: number | null;
  /** @format int32 */
  requestTypeId?: number | null;
  /** @format int32 */
  fromOrgUnitId?: number | null;
  /** @format int32 */
  inventoryUserId?: number | null;
  /** @format int32 */
  requestStatusId?: number;
}

export interface ApproveAssetRequestRequest {
  /** @format int32 */
  approvedById?: number;
}

export interface UpdateAssetDefinitionRequest {
  name?: string;
  assetMadeIn?: string;
  assetBrand?: string;
  packagingUnit?: string;
  /** @format int32 */
  assetCategoryId?: number;
  /** @format int32 */
  quantity?: number;
}

export type PagedAssetDefinitionsRequest = PagedBaseRequest & object;

export type GetAllAssetDefinitionRequest = object;

export type GetAssetDefinitionRequest = object;

export type DeleteAssetDefinitionRequest = object;

export interface CreateAssetDefinitionRequest {
  name?: string;
  assetMadeIn?: string;
  assetBrand?: string;
  packagingUnit?: string;
  /** @format int32 */
  assetCategoryId?: number | null;
  /** @format int32 */
  quantity?: number | null;
}

export interface UpdateAssetCategoryRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  parentId?: number | null;
  isSearchable?: boolean | null;
}

export type PagedAssetCategoriesRequest = PagedBaseRequest & object;

export type GetAllAssetCategoriesRequest = object;

export type GetAssetCategoryRequest = object;

export type DeleteAssetCategoryRequest = object;

export interface CreateAssetCategoryRequest {
  nameAr?: string;
  nameEn?: string;
  /** @format int32 */
  parentId?: number | null;
  isSearchable?: boolean | null;
}

export interface PagedListOfAppUserPagedDTO {
  data?: AppUserPagedDTO[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type AppUserPagedDTO = BasePagedDto & {
  /** @format int64 */
  id?: number;
  fullName?: string | null;
  emailAddress?: string;
  mobileNumber?: string | null;
  isActive?: boolean;
  jobTitle?: string | null;
  orgUnit?: string | null;
  officeNumber?: string | null;
  photoUrl?: string | null;
};

export type GetAppUsersPagedQuery = object;

/** @example {"base64Signature":"base64EncodedImageString"} */
export interface UpdateUserSignatureRequest {
  base64Signature?: string;
}

export interface UpdateUserPhotoRequest {
  /**
   * @format binary
   * @minLength 1
   */
  userPhoto: File;
}

export interface UpdateUserProfileRequest {
  mobileNumber?: string | null;
  microsoftTeamsEmail?: string | null;
  arabicFullName?: string | null;
  officeNumber?: string | null;
  /** @format int32 */
  jobTitleId?: number | null;
  civilId?: string | null;
}

export interface UpdateAppUserRequest {
  emailAddress?: string;
  fullName?: string | null;
  mobileNumber?: string | null;
  /** @format date-time */
  birthDate?: string | null;
  /** @format int32 */
  jobTitleId?: number | null;
  /** @format int32 */
  orgUnitId?: number | null;
  isActive?: boolean;
  roleIds?: number[] | null;
}

export interface ResetPasswordRequestUser {
  newPassword?: string;
  confirmNewPassword?: string;
}

export interface ListAppUserEntity {
  /** @format int32 */
  id?: number;
  arabicFullName?: string;
}

export type ListAppUsersRequest = object;

export interface GetAppUserByIdResponse {
  /** @format int32 */
  id?: number;
  fullName?: string | null;
  emailAddress?: string;
  mobileNumber?: string | null;
  isActive?: boolean;
  /** @format int32 */
  jobTitleId?: number | null;
  /** @format int32 */
  orgUnitId?: number | null;
  rolesIds?: number[] | null;
}

export type GetAppUserByIdRequest = object;

export type DeleteAppUserRequest = object;

/** @example {"fullName":"أحمد محمد محمود","emailAddress":"email@example.com","birthDate":"2025-08-20T06:29:31.350037Z","mobileNumber":"965126547896548","civilId":"282041201456","jobTitleId":1,"roleIds":[1,2,3],"isActive":true,"orgUnitId":1} */
export type CreateEntraIdUserRequest = AppUserCreateDto & object;

export interface AppUserCreateDto {
  /** @minLength 1 */
  fullName: string;
  /**
   * @format email
   * @minLength 1
   * @pattern ^\S*$
   */
  emailAddress: string;
  /** @format date-time */
  birthDate?: string | null;
  /**
   * @minLength 1
   * @pattern ^\d{8}$
   */
  mobileNumber: string;
  /** @pattern ^\d{12}$ */
  civilId?: string | null;
  /**
   * @format int32
   * @min 0
   * @exclusiveMin true
   * @minLength 1
   */
  jobTitleId: number;
  roleIds?: number[] | null;
  isActive: boolean;
  /** @format int32 */
  orgUnitId?: number | null;
}

/** @example {"fullName":"أحمد محمد محمود","emailAddress":"email@example.com","birthDate":"2025-08-20T06:29:31.3514689Z","mobileNumber":"965126547896548","civilId":"282041201456","jobTitleId":1,"roleIds":[1,2,3],"isActive":true,"orgUnitId":1} */
export type CreateUserRequest = AppUserCreateDto & object;

export interface ChangePasswordByAdminRequest {
  /** @format int32 */
  id?: number;
  newPassword?: string;
}

export interface UpdateAppDefinitionRequest {
  value?: string;
}

export type GetAppDefinitionByKeyRequest = object;

export interface AppDefinitionListDto {
  /** @format int32 */
  id?: number;
  key?: string;
  value?: string;
}

export type GetAllAppDefinitionsRequest = object;

export type DeleteAppDefinitionRequest = object;

export interface CreateAppDefinitionRequest {
  key?: string;
  value?: string;
}

export type GetPagedEntityHistoryRequest = object;

export type PagedAppAuditLogsRequest = PagedBaseRequest & object;

export type GetEntityHistoryByIdRequest = object;

export interface UpdatedAgencyDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface UpdateAgencyRequest {
  /**
   * @minLength 3
   * @maxLength 100
   */
  name: string;
}

export interface PagedListOfAgencyListItem {
  data?: AgencyListItem[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type AgencyListItem = BasePagedDto & {
  /** @format int32 */
  id?: number;
  name?: string;
};

export type PagedAgencisRequest = PagedBaseRequest & object;

export interface AgencyDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type DeleteAgencyRequest = object;

export interface CreatedAgencyDto {
  /** @format int32 */
  id?: number;
  name?: string;
}

export interface CreateAgencyRequest {
  /** @minLength 100 */
  name: string;
  code?: string;
}

export interface UpdateActionTypeRequest {
  name?: string;
  description?: string;
  isService?: boolean | null;
  isDisplay?: boolean | null;
}

export type PagedActionTypesRequest = PagedBaseRequest & object;

export type GetAllActionTypesRequest = object;

export type GetActionTypeRequest = object;

export type DeleteActionTypeRequest = object;

export interface CreateActionTypeRequest {
  name?: string;
  description?: string;
  isService?: boolean | null;
  isDisplay?: boolean | null;
}

export interface UpdatedAccountDto {
  /** @format int32 */
  id?: number;
  name?: string;
  number?: string;
  accountType?: AccountType;
  /** @format date-time */
  lastModificationTime?: string;
}

export interface UpdateAccountRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /**
   * @minLength 1
   * @maxLength 8
   */
  number: string;
}

export interface PagedListOfAccountHistoryResponseDto {
  data?: AccountHistoryResponseDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface AccountHistoryResponseDto {
  /** @format int32 */
  id?: number;
  accountName?: string;
  accountCode?: string;
  level?: AccountType;
  actionCode?: AccountActionCode;
  status?: AccountActionStatus;
  description?: string;
  error?: string | null;
  creationUserName?: string;
  /** @format date-time */
  creationDate?: string;
}

export type GetPagedAccountHistoriesRequest = object;

export interface PagedListOfAccountListItem {
  data?: AccountListItem[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export type AccountListItem = BasePagedDto & {
  /** @format int32 */
  id?: number;
  level?: AccountType;
  accountCode?: string;
  description?: string;
  /** @format date-time */
  addDate?: string;
  addedBy?: string | null;
  isRecentlyChanged?: boolean;
  isOpen?: boolean;
  isStatic?: boolean;
};

export type PagedAccountsRequest = PagedBaseRequest & object;

export interface OpenAccountRequest {
  /** @format int32 */
  id?: number;
}

export interface AccountListDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
  /** @format int32 */
  parentId?: number | null;
}

export type GetTypeAccountsRequest = object;

export interface AccountParentInfoDto {
  /** @format int32 */
  id?: number;
  name?: string;
  number?: string;
  accountType?: AccountType;
}

export type GetAccountParentsRequest = object;

export type GetItemAccountsRequest = object;

export type GetGuidanceAccountsRequest = object;

export type GetGroupAccountsRequest = object;

export type GetChapterAccountsRequest = object;

export type GetCategoryAccountsRequest = object;

export interface AccountDetailsDto {
  /** @format int32 */
  id?: number;
  name?: string;
  number?: string;
  sectionNumber?: string;
  accountType?: AccountType;
  /** @format int32 */
  parentId?: number | null;
  isOpen?: boolean;
}

export type GetAccountByIdRequest = object;

export interface AccountListFlatDto {
  /** @format int32 */
  id?: number;
  name?: string;
  code?: string;
}

export type GetAllAccountsRequest = object;

export type DeleteAccountRequest = object;

export interface CreateCategoryAccountRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** @format int32 */
  groupAccountId: number;
  /**
   * @minLength 1
   * @maxLength 8
   */
  categoryAccountNumber: string;
  itemAccount?: ItemAccountInfo | null;
  typeAccount?: TypeAccountInfo | null;
}

export interface ItemAccountInfo {
  number?: string;
  name?: string;
}

export interface TypeAccountInfo {
  number?: string;
  name?: string;
}

export interface CreateItemAccountRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** @format int32 */
  categoryAccountId: number;
  /**
   * @minLength 1
   * @maxLength 8
   */
  itemAccountNumber: string;
  typeAccount?: TypeAccountInfo | null;
}

export interface CreateTypeAccountRequest {
  /**
   * @minLength 1
   * @maxLength 100
   */
  name: string;
  /** @format int32 */
  itemAccountId: number;
  /**
   * @minLength 1
   * @maxLength 8
   */
  typeAccountNumber: string;
}

export interface CloseAccountRequest {
  /** @format int32 */
  id?: number;
}

export type GetUnitsRequest = object;

export type GetSubAgenciesRequest = object;

export type GetProgramsRequest = object;

export type GetLocationsRequest = object;

export type GetFunctionsRequest = object;

export type GetAccountsRequest = object;

export type GetListRequest17 = object;

export interface BulkUpdateAccountCombinationAmountsRequest {
  accountCombinations: BulkUpdateAccountCombinationAmountItemDto[];
}

export interface BulkUpdateAccountCombinationAmountItemDto {
  /** @format int32 */
  accountCombinationId?: number;
  /** @format decimal */
  estimatedAmount?: number;
  /** @format decimal */
  approvedAmount?: number;
}

export interface PagedListOfAccountCombinationPagedDto {
  data?: AccountCombinationPagedDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface AccountCombinationPagedDto {
  /** @format int32 */
  id?: number;
  accountCombinationCode?: string;
  accountCombinationName?: string;
  accountName?: string;
  /** @format date-time */
  creationTime?: string;
  createdBy?: string;
  isOpened?: boolean;
  isChanged?: boolean;
  canBeDeleted?: boolean;
  isStatic?: boolean;
}

export type PagedAccountCombinationsRequest = object;

export type ListAccountCombinationsRequest = object;

export type DeleteAccountCombinationRequest = object;

export interface DeactivateAccountCombinationRequest {
  /** @format int32 */
  id?: number;
}

export interface CreateAccountCombinationRequest {
  /** @format int32 */
  accountId?: number;
  /** @format int32 */
  programId?: number;
  /** @format int32 */
  subAgencyId?: number;
  /** @format int32 */
  functionId?: number;
  /** @format int32 */
  unitId?: number;
  /** @format int32 */
  locationId?: number;
  /** @format decimal */
  estimatedAmount?: number | null;
}

export interface ActivateAccountCombinationRequest {
  /** @format int32 */
  id?: number;
}

export interface PagedListOfAccountCombinationAuditLogDto {
  data?: AccountCombinationAuditLogDto[];
  /** @format int32 */
  currentPage?: number;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  totalCount?: number;
  /** @format int32 */
  totalPages?: number;
}

export interface AccountCombinationAuditLogDto {
  /** @format date-time */
  operationDate?: string;
  operation?: AccountCombinationActionCode;
  operationStatus?: AccountCombinationActionStatus;
  accountCombinationCode?: string;
  accountCombinationName?: string;
  operationExecutor?: string;
}

export type GetAccountCombinationAuditLogsRequest = object;
