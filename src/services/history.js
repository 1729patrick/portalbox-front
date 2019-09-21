import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export default history;

history.listen(({ pathname }) => {
  window.scrollTo(0, 0);
});
