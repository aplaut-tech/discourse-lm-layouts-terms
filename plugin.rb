# name: lm-layouts-terms
# about: Adds terms to sidebar (requires layouts plugin)
# version: 0.0.1
# authors: Shoppilot team

enabled_site_setting :lm_layouts_terms_data
enabled_site_setting :lm_layouts_terms_count
enabled_site_setting :lm_layouts_terms_symbols_visible

register_asset 'stylesheets/lm-layouts-terms.scss'
register_asset 'images/lm-layouts-terms-heading-icon.png'

after_initialize do
  DiscourseLayouts::WidgetHelper.add_widget('lm-layouts-terms')
end
