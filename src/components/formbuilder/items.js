const items = [
  {
    key: 'Header',
    name: 'Header Text',
    icon: 'fas fa-heading',
    static: true,
    content: 'Placeholder Text...',
  },
  {
    key: 'Label',
    name: 'Label',
    static: true,
    icon: 'fas fa-font',
    content: 'Placeholder Text...',
  },
  {
    key: 'Paragraph',
    name: 'Paragraph',
    static: true,
    icon: 'fas fa-paragraph',
    content: 'Placeholder Text...',
  },
  {
    key: 'LineBreak',
    name: 'Line Break',
    static: true,
    icon: 'fas fa-arrows-alt-h',
  },
  {
    key: 'Dropdown',
    canHaveAnswer: true,
    name: 'Dropdown',
    icon: 'far fa-caret-square-down',
    label: 'Placeholder Label',
    field_name: 'dropdown_',
    options: [],
  },
  {
    key: 'Tags',
    canHaveAnswer: true,
    name: 'Tags',
    icon: 'fas fa-tags',
    label: 'Placeholder Label',
    field_name: 'tags_',
    options: [],
  },
  {
    key: 'Checkboxes',
    canHaveAnswer: true,
    name: 'Checkboxes',
    icon: 'far fa-check-square',
    label: 'Placeholder Label',
    field_name: 'checkboxes_',
    options: [],
  },
  {
    key: 'RadioButtons',
    canHaveAnswer: true,
    name: 'Multiple Choice',
    icon: 'far fa-dot-circle',
    label: 'Placeholder Label',
    field_name: 'radiobuttons_',
    options: [],
  },
  {
    key: 'TextInput',
    canHaveAnswer: true,
    name: 'Text Input',
    label: 'Placeholder Label',
    icon: 'fas fa-font',
    field_name: 'text_input_',
  },
  {
    key: 'NumberInput',
    canHaveAnswer: true,
    name: 'Number Input',
    label: 'Placeholder Label',
    icon: 'fas fa-plus',
    field_name: 'number_input_',
  },
  {
    key: 'TextArea',
    canHaveAnswer: true,
    name: 'Multi-line Input',
    label: 'Placeholder Label',
    icon: 'fas fa-text-height',
    field_name: 'text_area_',
  },
  {
    key: 'Image',
    name: 'Image',
    label: '',
    icon: 'far fa-image',
    field_name: 'image_',
    src: '',
  },
  {
    key: 'Rating',
    canHaveAnswer: true,
    name: 'Rating',
    label: 'Placeholder Label',
    icon: 'fas fa-star',
    field_name: 'rating_',
  },
  {
    key: 'DatePicker',
    canDefaultToday: true,
    canReadOnly: false,
    dateFormat: 'MM/dd/yyyy',
    timeFormat: 'hh:mm aa',
    showTimeSelect: false,
    showTimeSelectOnly: false,
    name: 'Date',
    icon: 'far fa-calendar-alt',
    label: 'Placeholder Label',
    field_name: 'date_picker_',
  },
  {
    key: 'HyperLink',
    name: 'Web site',
    icon: 'fas fa-link',
    static: true,
    content: 'Placeholder Web site link ...',
    href: 'http://www.example.com',
  },
  {
    key: 'Range',
    name: 'Range',
    icon: 'fas fa-sliders-h',
    label: 'Placeholder Label',
    field_name: 'range_',
    step: 1,
    default_value: 3,
    min_value: 1,
    max_value: 5,
    min_label: 'Easy',
    max_label: 'Difficult',
  },
  {
    key: 'Camera',
    name: 'Camera',
    icon: 'fas fa-camera',
    label: 'Placeholder Label',
    field_name: 'camera_',
  },
];

export default items;
