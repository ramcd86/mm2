module.exports = {
  extend: '@apostrophecms/page-type',
  options: {
    label: 'Publisher Delivery Default Page'
  },
  fields: {
    add: {
      main: {
        type: 'area',
        options: {
          widgets: {
            'custom-image': {},
            '@apostrophecms/rich-text': {
              toolbar: [
                'styles',
                '|',
                'bold',
                'italic',
                'strike',
                'link',
                '|',
                'blockquote',
                'bulletList',
                'orderedList',
                'alignLeft',
                'alignCenter',
                'alignRight',
                'undo',
                'redo'
              ],
              styles: [
                {
                  tag: 'p',
                  label: 'Paragraph (P)'
                },
                {
                  tag: 'h3',
                  label: 'Heading 3 (H3)'
                },
                {
                  tag: 'h4',
                  label: 'Heading 4 (H4)'
                }
              ]
            },
            '@apostrophecms/html': {},
            'custom-divider': {},
            'custom-area': {}
          }
        }
      }
    },
    group: {
      basics: {
        label: 'Basics',
        fields: [ 'title', 'main' ]
      }
    }
  }
};