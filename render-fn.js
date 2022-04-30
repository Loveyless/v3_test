import { h } from "vue";

const App = {
  render() {
    const list = [
      { name: 123, id: 1 },
      { name: 213, id: 2 },
    ];
    // v-for
    return list.map((item) => {
      return h(
        "div",
        {
          key: item.id,
          onClick: () => {
            console.log(item.id);
          },
        },
        `i am ${item.name} , my id is ${item.id}`
      );
    });
  },
};

export default App;
