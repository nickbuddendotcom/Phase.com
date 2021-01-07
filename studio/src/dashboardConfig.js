export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff6e26b77e9d8bd5585bff4',
                  title: 'Sanity Studio',
                  name: 'phase-com-studio',
                  apiId: '1dbdf736-71c1-4176-8e15-430cdc1fdc08'
                },
                {
                  buildHookId: '5ff6e26b3bfacfc2523044b0',
                  title: 'Blog Website',
                  name: 'phase-com',
                  apiId: '813c2c95-f45e-4f43-87eb-53021bda229d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickbuddendotcom/Phase.com',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://phase-com.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
