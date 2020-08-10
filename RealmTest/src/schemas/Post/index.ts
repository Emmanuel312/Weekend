export default class PostSchema {
  static schema = {
    name: 'Post',
    properties: {
      id: 'string',
      title: 'string',
      description: 'string',
    },
  };
}
