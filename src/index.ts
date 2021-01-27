require('dotenv').config(); // https://www.npmjs.com/package/dotenv

const moduleFunction = async (runSuccessfully: boolean) => {
  if (runSuccessfully) {
    return 'yo';
  }
  throw new Error('whoops');
};

(async () => {
  const response = await moduleFunction(true);
  console.log(response);
})().catch((e: Error) => {
  console.error(e);
  process.exit(1);
});
