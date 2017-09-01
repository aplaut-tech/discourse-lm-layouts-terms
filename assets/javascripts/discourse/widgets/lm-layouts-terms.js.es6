import {createWidget} from 'discourse/widgets/widget';
import {h} from 'virtual-dom';


// createWidget('lm-layouts-terms-read-more', {
//   tagName: 'span.lm-layouts-terms-read-more-link',

//   click () {
//     this.sendWidgetAction('removeSpoiler');
//   },

//   html () {
//     return 'показать ещё';
//   }
// });


var TERMS;

export default createWidget('lm-layouts-terms', {
  tagName: '.lm-layouts-terms',

  _getTerms () {
    if (TERMS) {
      return TERMS;
    } else {
      return TERMS = JSON.parse(this.siteSettings.lm_layouts_terms_data)
        .sort(() => Math.random() > Math.random())
        .slice(0, this.siteSettings.lm_layouts_terms_count);
    }
  },

  removeSpoiler () {
    console.log(this.state.spoiled);
    this.state.spoiled = true;
    console.log(this.state.spoiled);
  },

  html () {
    const symbols_visible = this.siteSettings.lm_layouts_terms_symbols_visible;
    const terms = this._getTerms();

    return [
      h('.lm-layouts-terms-heading', 'Популярные термины'),
      h('.lm-layouts-terms-list', terms.map((term) => {
        let content = term.content;
        let spoiler = false;
        if (content.length > symbols_visible && !this.state.spoiled) {
          content = content.slice(0, symbols_visible) + '…';
          spoiler = true;
        }
        return h('.lm-layouts-terms-list-item', [
          h('.lm-layouts-terms-term-title', term.title),
          h('.lm-layouts-terms-term-content', content) //,
          // (spoiler ? this.attach('lm-layouts-terms-read-more', {removeSpoiler: this.removeSpoiler}) : '')
        ]);
      })),
      h('a.lm-layouts-terms-external-link', {
        href: 'https://leroymerlin.ru/slovari',
        target: '_blank'
      }, 'Перейти в словарь терминов')
    ];
  }
});
