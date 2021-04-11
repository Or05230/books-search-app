export interface AppPopUpData {
  title?: string;
  content?: string;
  cancel_button?: string;
  ok_button?: string;
  title_exit_icon?: string;
  title_icon?: string;
  line_before_main_data?: string;
  line_after_main_data?: string;
  title_icon_class?: PopUpClassTypeEnum;
}

export enum PopUpClassTypeEnum{
  WARNING = 'WARNING',
}

export enum PopUpContentsEnum {
  CHANGE_METRIC_AFTER_CONTENT = '?',
  CHANGE_METRIC_BEFORE_CONTENT = 'Are you sure you want to change the measure unit to ',
}

export const CHANGE_METRICS: AppPopUpData = {
  title: 'Change Unit',
  cancel_button: 'Cancel',
  ok_button: 'Change',
  title_exit_icon: 'clear',
  title_icon: 'warning',
  title_icon_class: PopUpClassTypeEnum.WARNING,
  line_before_main_data: PopUpContentsEnum.CHANGE_METRIC_BEFORE_CONTENT,
  line_after_main_data: PopUpContentsEnum.CHANGE_METRIC_AFTER_CONTENT
};


