module.exports = {
  client: {
    name: 'My Client Project',
    includes: ['./src/**/*.graphql', './client-package/src/**/*.{gql,graphql,graphqls}'],
    service: {
      name: "my-project",
      localSchemaFile: './schema.graphql'
    }
  },
};
