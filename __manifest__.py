{
    'name': 'Odoo OWL Testing',
    'summary': 'Example for OWL',
    'description': 'OWL Odoo Integration',
    'author': 'Kyle Sin Lynn',
    'website': 'http://kylesinlynn.ml',
    'version': '0.0.1',
    'depends': ['base'],
    'demo': [],
    'data': [],
    'assets': {
        'web.assets_backend': [
            'owl_odoo_testing/static/src/js/components/PartnerOrderSummary.js',
        ]
    },
    'qweb': [
        'owl_odoo_testing/static/src/js/components/PartnerOrderSummary.xml',
    ]
}