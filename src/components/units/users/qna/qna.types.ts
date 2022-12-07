export type IQnaPresenterCreatorProps = {
  listCount: number;
  currentPage: number;
  fetchProductsByCreator: any;
  onClickPage: (id: number) => void;
};

export type IQuestionListProps = {
  item: any;
};

export type IQnaPresenterCommonsProps = {
  fetchMyQuestions: any;
};
