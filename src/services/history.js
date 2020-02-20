import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(({ pathname }) => {
  window.scrollTo(0, 0);
});

export default history;
