/* eslint-disable global-require, import/no-dynamic-require */
let readPkgUpSyncMock

jest.mock('read-pkg-up', () => ({
  sync: jest.fn(() => ({ package: {}, path: '/blah/package.json' })),
}))

beforeEach(() => {
  jest.resetModules()
  readPkgUpSyncMock = require('read-pkg-up').sync
})

describe('parser', () => {
  it('should be babel by default', () => {
    const config = mockPkg()
    expect(config.parser).toBe('babel-eslint')
  })

  it('should be typescript if typescript is a devDependency', () => {
    const config = mockPkg({ devDependencies: { typescript: '* ' } })
    expect(config.parser).toBe('@typescript-eslint/parser')
  })
})

describe('extends', () => {
  it('should extend airbnb-base by default', () => {
    const config = mockPkg()
    expect(config.extends).toContain('airbnb-base')
    expect(config.extends).not.toContain('airbnb')
  })

  it('should extend airbnb if react is any dependency', () => {
    const config = mockPkg({ dependencies: { react: '*' } })
    expect(config.extends).toContain('airbnb')
    expect(config.extends).not.toContain('airbnb-base')
  })

  it('should extend recommended prettier configuration', () => {
    const config = mockPkg()
    expect(config.extends).toContain('plugin:prettier/recommended')
  })

  it('should extend typescript related configs if typescript is a devDependency', () => {
    const config = mockPkg({ devDependencies: { typescript: '*' } })
    expect(config.extends).toEqual(
      expect.arrayContaining([
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ])
    )
  })

  it('should extend prettier react if react is any dependency', () => {
    const config = mockPkg({ dependencies: { react: '*' } })
    expect(config.extends).toContain('prettier/react')
  })
})

describe('plugins', () => {
  it('should include prettier by default', () => {
    const config = mockPkg()
    expect(config.plugins).toContain('prettier')
  })

  it('should include typescript plugin if typescript is a devDependency', () => {
    const config = mockPkg({ devDependencies: { typescript: '*' } })
    expect(config.plugins).toContain('@typescript-eslint')
  })

  it('should include react plugins if react is any dependency', () => {
    const config = mockPkg({ dependencies: { react: '*' } })
    expect(config.plugins).toEqual(
      expect.arrayContaining(['react', 'react-hooks'])
    )
  })

  it('should include react native plugin if react-native is any dependency', () => {
    const config = mockPkg({ dependencies: { 'react-native': '*' } })
    expect(config.plugins).toContain('react-native')
  })
})

describe('env', () => {
  it('should init es6 and node environments by default', () => {
    const config = mockPkg()
    expect(config.env.es6).toBeTruthy()
    expect(config.env.node).toBeTruthy()
  })

  it('should init jest environment if jest is a devDependency', () => {
    const config = mockPkg({ devDependencies: { jest: '*' } })
    expect(config.env.jest).toBeTruthy()
  })

  it('should init browser environment if react-dom is any dependency', () => {
    const config = mockPkg({ dependencies: { 'react-dom': '*' } })
    expect(config.env.browser).toBeTruthy()
  })

  it('should init react native environment if react-native is any dependency', () => {
    const config = mockPkg({ dependencies: { 'react-native': '*' } })
    expect(config.env['react-native/react-native']).toBeTruthy()
  })
})

describe('settings', () => {
  describe('import/resolver', () => {
    describe('moduleDirectory', () => {
      it('should include node_modules and src folder', () => {
        const config = mockPkg()
        expect(config.settings['import/resolver'].node.moduleDirectory).toEqual(
          ['node_modules', 'src']
        )
      })
    })

    describe('extensions', () => {
      it('should include .js by default', () => {
        const config = mockPkg()
        expect(config.settings['import/resolver'].node.extensions).toContain(
          '.js'
        )
      })

      it('should include .ts if typescript is a devDependency', () => {
        const config = mockPkg({ devDependencies: { typescript: '*' } })
        expect(config.settings['import/resolver'].node.extensions).toContain(
          '.ts'
        )
      })

      it('should include .jsx if react is any dependency', () => {
        const config = mockPkg({ dependencies: { react: '*' } })
        expect(config.settings['import/resolver'].node.extensions).toContain(
          '.jsx'
        )
      })

      it('should include .tsx if react is any dependency and typescript is a devDependency', () => {
        const config = mockPkg({
          dependencies: { react: '*' },
          devDependencies: { typescript: '*' },
        })
        expect(config.settings['import/resolver'].node.extensions).toContain(
          '.tsx'
        )
      })
    })

    it('should include react native extensions if react-native is any dependency', () => {
      const config = mockPkg({ dependencies: { 'react-native': '*' } })
      expect(config.settings['import/resolver'].node.extensions).toEqual(
        expect.arrayContaining([
          '.native.js',
          '.android.js',
          '.ios.js',
          '.native.jsx',
          '.android.jsx',
          '.ios.jsx',
        ])
      )
    })

    it('should include react native typescript extensions if react-native is any dependency and typescript is a devDependency', () => {
      const config = mockPkg({
        dependencies: { 'react-native': '*' },
        devDependencies: { typescript: '*' },
      })
      expect(config.settings['import/resolver'].node.extensions).toEqual(
        expect.arrayContaining([
          '.native.ts',
          '.android.ts',
          '.ios.ts',
          '.native.tsx',
          '.android.tsx',
          '.ios.tsx',
        ])
      )
    })
  })
})

describe('rules', () => {
  describe('no-console', () => {
    it('should be included by default', () => {
      const config = mockPkg()
      expect(config.rules['no-console']).toBe('warn')
    })
  })

  describe('no-use-before-define', () => {
    it('should be included by default', () => {
      const config = mockPkg()
      expect(config.rules['no-use-before-define']).toEqual([
        'error',
        { functions: false },
      ])
    })
  })

  describe('import/prefer-default-export', () => {
    it('should be included by default', () => {
      const config = mockPkg()
      expect(config.rules['import/prefer-default-export']).toBe('off')
    })
  })

  describe('@typescript-eslint/explicit-function-return-type', () => {
    it('should be included if typescript is a devDependency', () => {
      const config = mockPkg({ devDependencies: { typescript: '*' } })
      expect(
        config.rules['@typescript-eslint/explicit-function-return-type']
      ).toBe('off')
    })
  })

  describe('@typescript-eslint/no-unused-vars', () => {
    it('should be included if typescript is a devDependency', () => {
      const config = mockPkg({ devDependencies: { typescript: '*' } })
      expect(config.rules['@typescript-eslint/no-unused-vars']).toBe('error')
    })
  })

  describe('@typescript-eslint/no-use-before-define', () => {
    it('should be included if typescript is a devDependency', () => {
      const config = mockPkg({ devDependencies: { typescript: '*' } })
      expect(config.rules['@typescript-eslint/no-use-before-define']).toBe(
        'off'
      )
    })
  })

  describe('react/jsx-filename-extension', () => {
    it('should be included if react is any dependency', () => {
      const config = mockPkg({ dependencies: { react: '*' } })
      expect(config.rules['react/jsx-filename-extension']).toEqual([
        'error',
        { extensions: ['.jsx'] },
      ])
    })

    it('should include react typescript extension if typescript is a devDependency', () => {
      const config = mockPkg({
        dependencies: { react: '*' },
        devDependencies: { typescript: '*' },
      })
      expect(config.rules['react/jsx-filename-extension']).toEqual([
        'error',
        { extensions: ['.jsx', '.tsx'] },
      ])
    })
  })

  describe('react/prop-types', () => {
    it('should be included if react is any dependency', () => {
      const config = mockPkg({ dependencies: { react: '*' } })
      expect(config.rules['react/prop-types']).toBe('error')
    })

    it('should be off if typescript is a devDependency', () => {
      const config = mockPkg({
        dependencies: { react: '*' },
        devDependencies: { typescript: '*' },
      })
      expect(config.rules['react/prop-types']).toBe('off')
    })
  })

  describe('react-hooks/exhaustive-deps', () => {
    it('should be included if react is any dependency', () => {
      const config = mockPkg({ dependencies: { react: '*' } })
      expect(config.rules['react-hooks/exhaustive-deps']).toBe('error')
    })
  })

  describe('react-hooks/rules-of-hooks', () => {
    it('should be included if react is any dependency', () => {
      const config = mockPkg({ dependencies: { react: '*' } })
      expect(config.rules['react-hooks/rules-of-hooks']).toBe('error')
    })
  })

  describe('prettier/prettier', () => {
    it('should be included by default', () => {
      const config = mockPkg()
      expect(config.rules['prettier/prettier']).toEqual([
        'error',
        {
          arrowParens: 'always',
          semi: false,
          singleQuote: true,
          trailingComma: 'es5',
        },
      ])
    })
  })
})

function mockPkg(pkg = {}) {
  readPkgUpSyncMock.mockImplementationOnce(() => ({ package: pkg }))
  return require('..')
}
