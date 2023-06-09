// import {Page, test as customTest} from '@playwright/test';
// import { MainPage } from '../pages/MainPage';

// export const Front = (page: Page) => ({
//     front: new MainPage(page),
// })

// const test = customTest.extend<{
//     front: ReturnType<typeof Front>
// }>({
//     front: async ({page}, use) => {
//         await use(Front(page));
//     }
// })

// export default test;