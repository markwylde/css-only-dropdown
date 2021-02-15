function render () {
  const ui = m('div',
    m('h1', 'My Dropdown Test'),
    m('div', { class: 'dropdown', tabindex: 1 },
      m('div', { class: 'dropdown-heading' },'My Items >'),
      m('div', { class: 'dropdown-content' },
        m('a', { href: '#' }, 'One (with some more)'),
        m('a', { href: '#' }, 'Two'),
        m('a', { href: '#' }, 'Three')
      ),
    ),
    m('div', { class: 'dropdown', tabindex: 2 },
      m('div', { class: 'dropdown-heading' },'My Items >'),
      m('div', { class: 'dropdown-content' },
        m('a', { href: '#' }, 'One'),
        m('a', { href: '#' }, 'Two'),
        m('a', { href: '#' }, 'Three')
      ),
    ),
    m('h2', 'Extra Content'),
    m('p', 'Some extra content after the dropdown')
  );

  m.render(document.body, ui)
}

render()
