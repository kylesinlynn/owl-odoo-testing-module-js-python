odoo.define('owl_odoo_testing.PartnerOrderSummary', function (require) {
   
    const FormRenderer = require('web.FormRenderer')
    const { Component } = owl;
    const { ComponentWrapper } = require('web.OwlCompatibility')

    class PartnerOrderSummary extends Component {

    }

    Object.assign(PartnerOrderSummary, {
        template: 'owl_odoo_testing.PartnerOrderSummary'
    })

    FormRenderer.include({
        async _render() {
            await this._super(...arguments)

            for(const element of this.el.querySelectorAll('.o_partner_order_summary')) {
                (new ComponentWrapper(this, PartnerOrderSummary)).mount(element)
            }
        }
    })
})