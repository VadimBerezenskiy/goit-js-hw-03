const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const information = Object.entries(user);
for (const info of information) {
  const key = info[0];
  const value = info[1];
  console.log(`${key}: ${value}`);
}
