import { orderBy } from "lodash";

test("renders learn react link", () => {
  const users = [{ age: 10 }, { age: 20 }];
  console.log(orderBy(users, ["age"]));
});
