export default function Projects() {
  return (
    <>
      <section id="projects" className="body-font">
      <div className="flex flex-col text-center w-full pt-24">
        <h1  className="text-5xl font-bold title-font mb-4 font-lacquer">My Work</h1>
      </div>

      <div className="hero-content flex-col lg:flex-row">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg  bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://attack-on-python.gitlab.io/attack-on-python/" target="_blank" rel="noopener noreferrer">
      <img
        className="rounded-t-lg"
        src="https://i.imgur.com/RJpAvZx.png"
        alt="AoP Logo" />
    </a>
    <div className="p-0">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Attack on Python 
      </h5>
      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
      Educational turn-based action fantasy RPG set on teaching players the intracies of the coding language Python and promote further learning.

      </p>
    </div>
    <div
    className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAvlJREFUSEu9Vr9PU1EYPecWDKNtMVFjtFQ3aY0JRgcNkDiY6OjiBOwOOqlTZTDGOOjiaICJf8GNsukEWowOWJ+J0ZhQMMbBxL57zPfw4uPZiiKhU3vfu9/5zo/73RK79OEu4WBLoKMv1sZJRO02ouhkPso2Zs9tLY5R7/Q8vN8VqLSwVnI9ektxwlNjpCInN7Ncyddt87HG2oiXpuBUhxAJHFGbE93AugKVG62aFWxWipObClPT9tsK58DJAJx9P8u8O9BSayrNIGwsN1ZfEeh/UynsSxdLGNKPNQeLE518/ycg80NQwhTUdGC7wXhbQI1WjXLv3lTziVSHF1fP9jjM+pjnPHUofA+ebEs6C0Ku19cgXpLwFUQJ0DeBrwF8/ilNnxOGBLwXETlgkMLj5Wrh5pbSrSfNj0EcN2kIdzVu41SyRpSy+peXWlOWON92M5ZQQLfD3rSsidIBPQHJaS6tvRVSnHtJ5+83KwUOND5ViZ7EI6E9qfaeL7ZHco+Yi49bI+lmfczRIO0GkBWld/PBk2BwDD/r5G7Zenlp9SmE0+thwLPmYOGMBcTT383BXQlR/7VXtbeVwugmRgON1bn0uUjFWQ4ctSLlRusDwAPrz/SxWSke7AaUJNT54SD3BqMQ3TTdZLw4PyzPkWa1MFB+3roGxwcJjtf15oniQ2vQUZGEKPhi8rFHU+nGN50jO3QxVAvjxkaMAdsmJ86YfKWFtb2GE53Mfw5d++9u0ryyd0OYHDmRlvK3A5tEO4cRD3+R5GUBdUgrBM9L7o6jVtYJsd85f8NLdYJDoPZLXCT1JJu4TR5lsx8OoIObTxyhbkC+T+QKhCUI4yC/Ubxnk9v1+lo2TOmafxyqBpKmH8DDUA2Jst9Z83diqH6E1NesFvM7NlSzUhgjgRco7LeDbRMhHMiEEf2RTv780aN03JNw2OUH1UOhZGqIJYuw3b6WzG1dfEH3TrdrkCzcQUnHmany1x51msD/s7bln5P/Kf5X8d4pgFBn1xj9AGsZ9CoEwX/ZAAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAUBJREFUSEvtldFtwjAQhu930gECAxToa1OJDegkbSYBJgmdJNkACfpYiBcAFkC+6my5TdqXJlipWuGXOI7i//7Pd2dQTwM96dDvCE22hzkTZiFcAqz398PM79VwNN4eCxAFEWKiskoHj1eh1sd2Rdcamf/h76BTBFsbhrhw0fPCnNWLzFRsnoiwsKuX1tE+HWC0Po1UzBWBV1L98i6b62mipbuIWFAhMLLdQ7KyHYXJihHcM6hQ3ZG6MXNiPAdLhgY6Jm3F0uFSBCzSiAtxFdbRZ/gahKVg9OfXTchG7th/c6S49MjMGWObEJtjxSDdqnv7yO42J8tfopY5g3PZWNaiiGYMcysIuzti+sDizwEx5/beYtIKyN7SpPz6rRs6l6+6nr6N3lRD+6Osm7wecma4erhwgLj02ejKq6fx/4TeAR1IBCouKG8CAAAAAElFTkSuQmCC" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAUdJREFUSEvFlu9Rg0AQxd9iGkjSAKAfxRk7SCoxVpKkErSSxAoyE/LRCdcAoQHkOceIw59TcwQJX1n2d/t29x2CAR4ZgIHrQO6idPYBLoVwbaukQN1A1u/BeFv9tlaJBuTgxjZ5M96BzKugGsQ/JCEoi0shBLZxMJmXeeqQ/SmG2MvUOhShjg8TzwLClQPnrZmIhJsLnwSYXQwp9dX9qiYrNTdKbFtJCfGbUgpfjvfTZ+Ow9A253acLCsOaZJ0hhyQk5Xt39D5kGZSMGLb60hViGms/SpaArHprvBedNjUX0D0Jpmt3l7rOiHE/chl26Meh6CpXa7oA5Jl46nGsWu86Q7T+pRsQKs+cVw3oVS5T44sdIcOWFdlWAkK1AH/522+QYoJMXmRry19uYDTIQe4TTdaNLLb4v25GW1XOjb/Oj8S5p7OJ+wQCwfQayThnJgAAAABJRU5ErkJggg==" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAsVJREFUSEu9VS1vFVEQPXP3lYSgShEIEjalkpKQIDCkr6lAoitI238AAoFqGwQCgUaQtkFgsQjSbTAIEhJaQwJl6zBNcSB255C5++6ye3cfaYF03d6POTPnnJkrOIVPTgEDvSAzu0dDhc5BkILIHdxOUSAfDJCSSOl0rk6OyP05AKJu58u1yc048RZI+uEodRO6WhTyfJBwQegOlHIhcXxvoI5yVoU/LIgBU3mRCW+TkgqYFaW8SRI8YiEr+fXJPIC1QKZ3D1ctMIUbrWyEm1UgDFvrRC7EQwoeh2qo7oG48tz+7NR6B+TKx6NlkD/p8DIut7qoT8bpV5S4NXB4EYD8f8KFAFRXYiBGTSfYuCqaiKYL+Aoi92w5rqYGmd473DDhYqqEsmJrBDIh0pBtuyquaeG2XMJt23ci96n4HkzwG8T0UPkU01WB6GUL4gUfBar5Viya+M0E7U5ZIgvi1yBmW++WSBPLSsmnZmUKchHmoCwHkKBXs2Lb+zp7fr4jvLfvQJcIGTZdVIN4spHDMWuCVCLjrYPMK7gNcM2O9rrLNszCfwQRbnogiA/kv5ExHGWL4KpA1ptU+SNNAfvEF+N8RGGgJLayVXMmkUGYEvtXp1aaZ1ogpkupcqNpY+8qMLPsAzWdPgIy08CYsEnweXYyGwviKds7rLo9iEvkWsp84nizVHkXu6s6i7xQ3J1wMmNOrFh0Bx0LB+S680ejwoQvyTtO8cxbtZTX3anAtbp/RgPT0W2FijpTuDkkJwSXLLBdUNElA/CJRzb3WtlkNptDhglkvUlZ76g3oCTB0Er3A9PpnDWbCpd8RTGIYlGcfIu16PRJLGbff58xKv7bHR7fPdHL6KeCPVrRU/BfQcJU8M4bvYbW4U0n9TFwokpqi48EtjlmprD1cXp0Ov44utTVVLfTplXH3T9xJcdJ5J+E/xsAu/MLVnGyKcEe18kAAAAASUVORK5CYII=" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAaBJREFUSEvtlEFOwkAYhd8/oHEpcIGKLlwI0bhyJSw9givgHC6AjdegHMCde+oJTChLhV4A6gHsPDNtKEVAW0wwMc5mkvbvfP97/+sIdrBkBwz8QzK5nMmusuu3Ad4BeBhXirdpSb8LOR76TSp9LVo9md10raj6WnQDhDeulLo/VlIeTXugNAF2AOmEBwpt84yAM6kU60lIeTib6EDq3kXB+wxfsevE9WumiIRlFMTdJ5UAbwj4GNapYKS4f0NhL1RYLR59CbGefUvlOUl2vUmJAOcADrXmVU7UaQgxUMARoWdsfq0W7NCAJNVAJB8VK0pfCxs5SDcA21ExHUJqZgfk0jzTmvd5pQ40OFhWwM58bjEknIGW0KpMS2DF9YRHgWeaSAYjhhy5s4EA2SGJjhSk/lIpOBtnskhTJh0JEauJm79c2OVO23FUt+BsUrE0+KVkZYUI7fFZqbXps6V0bTeXRYpSQSI1upHKNsJTIq11g/72jzcFIWxPt0mxhLBgYkpE14XQ1u+qv+76SKUk6yjS1me66tMemsqubQ/7+3Z9AKAPvxq7cdh1AAAAAElFTkSuQmCC" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAZ9JREFUSEvFld9xgkAQxndPGlAbQJLH4EwqUCuJVqJWoqlErCAzkscEaUBpQG8zB6w55Q6QJOReudvffvvnA6GFgy0w4H8gXniYA+G0sUJBQfTUn+nvC0pSCOCiMQRp/fcQoEXk95elSh52yZSQVuoSAQSIFFepIkIXAcbqHhLOPofddSnkMUzGEmiTXSpmZQLqiTWGuG+J2+lkmZqORHphJQJw8uF3g1IlKqBwaJ9eypt4ra68ePKEg/i5e1XiwnTpENWTvd+bKMgZaG4LjwQuILjqe+T3CjGNy+iFR+LGK0hV473dcX8/hB8RxPKMVgiX5QIhiKNhb3CblFHJIDxuuJFAkNU3L4cegEtTpbwScgmklSSb7u+sGcKDUkuJ935YsX/xtCi7IcBxqpAgRsClWjrTNNaDaP5lmns9SJ3lNZZL3+C0J4IClGLLdqGydxxwJchRqjjvl2nbs3YajnX5SobA5lv3QyoWxlZa65+R/Ur3JSNDqUNay5N4vbUTvl/r98tAEnKU2ToFAsT21gittlNlGb/xvZaSn4JagXwB5kD1GkShVLcAAAAASUVORK5CYII=" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAc5JREFUSEu9lVFugkAQhv9Z6AGsF0DbR23SE4gnqZxEPQn0JOoJmpQ+tpYLqAco2Wlmy5LVomyCkRcgLPPN/jPzL+EGF92AAW9I9HaIVKhfwDQDcaZL9Vo89wqfJL0gw3w3B2gBRgHFawOSZ+JsO+4v20AXIY/5IdbMKQgRwAsbsN5VBVZEyee4tz4Ha4RIEAo5JSBmYM0lJU3SuOuMhD9q2bTuH8SVpi1Dm/nD+2HG4Ll5b5DwCGIWE6euNG162++uhMSUfD31MvvtCDLI9ysiLrajfuL+HASI7U91MFMngLTauAGHH7uUmaLv8f3UG2J3p0saCMzslFEwoSBGJE0hdbNBO0NUwCsJ7mZpk1CgqXRYZ4jpOJM9ZwpqI3KUJYowRCR36azOEFODqrXrhqgG1NaxM0QyFkmk+AKRdw09MW5QDWsniGiuwaum9h7mezbzMeonnSDSXXVNxL/kEqmMYSK6WuElrnFiaVumvzkBr11Hbt1JbQ+ONbhz0mbt1pIuTvypu9a2Xul9zmLOuXXjxB/50J2eQ1MswxeAlk1W7uvWXoeWyRR6ctXz5FQWo7V0kan8lU9GF3Z6xvscuxdr4nuG+K7zqolvsHPrfgH+Sb4pWJT7mAAAAABJRU5ErkJggg==" alt="icon" /></div>
  </div>
  </div>

  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://gitlab.com/Anhe0098/project-beta" target="_blank" rel="noopener noreferrer">
      <img
        className="rounded-t-lg"
        src="https://i.imgur.com/eL664PF.png"
        alt="CarCar" />
    </a>
    <div className="p-0">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        CarCar
      </h5>
      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
        Auto dealership management web application for both the sales and service of vehicles designed to provide a seemless experience for customers.  
      </p>
    </div>
    <div
    className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAvlJREFUSEu9Vr9PU1EYPecWDKNtMVFjtFQ3aY0JRgcNkDiY6OjiBOwOOqlTZTDGOOjiaICJf8GNsukEWowOWJ+J0ZhQMMbBxL57zPfw4uPZiiKhU3vfu9/5zo/73RK79OEu4WBLoKMv1sZJRO02ouhkPso2Zs9tLY5R7/Q8vN8VqLSwVnI9ektxwlNjpCInN7Ncyddt87HG2oiXpuBUhxAJHFGbE93AugKVG62aFWxWipObClPT9tsK58DJAJx9P8u8O9BSayrNIGwsN1ZfEeh/UynsSxdLGNKPNQeLE518/ycg80NQwhTUdGC7wXhbQI1WjXLv3lTziVSHF1fP9jjM+pjnPHUofA+ebEs6C0Ku19cgXpLwFUQJ0DeBrwF8/ilNnxOGBLwXETlgkMLj5Wrh5pbSrSfNj0EcN2kIdzVu41SyRpSy+peXWlOWON92M5ZQQLfD3rSsidIBPQHJaS6tvRVSnHtJ5+83KwUOND5ViZ7EI6E9qfaeL7ZHco+Yi49bI+lmfczRIO0GkBWld/PBk2BwDD/r5G7Zenlp9SmE0+thwLPmYOGMBcTT383BXQlR/7VXtbeVwugmRgON1bn0uUjFWQ4ctSLlRusDwAPrz/SxWSke7AaUJNT54SD3BqMQ3TTdZLw4PyzPkWa1MFB+3roGxwcJjtf15oniQ2vQUZGEKPhi8rFHU+nGN50jO3QxVAvjxkaMAdsmJ86YfKWFtb2GE53Mfw5d++9u0ryyd0OYHDmRlvK3A5tEO4cRD3+R5GUBdUgrBM9L7o6jVtYJsd85f8NLdYJDoPZLXCT1JJu4TR5lsx8OoIObTxyhbkC+T+QKhCUI4yC/Ubxnk9v1+lo2TOmafxyqBpKmH8DDUA2Jst9Z83diqH6E1NesFvM7NlSzUhgjgRco7LeDbRMhHMiEEf2RTv780aN03JNw2OUH1UOhZGqIJYuw3b6WzG1dfEH3TrdrkCzcQUnHmany1x51msD/s7bln5P/Kf5X8d4pgFBn1xj9AGsZ9CoEwX/ZAAAAAElFTkSuQmCC" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAUBJREFUSEvtldFtwjAQhu930gECAxToa1OJDegkbSYBJgmdJNkACfpYiBcAFkC+6my5TdqXJlipWuGXOI7i//7Pd2dQTwM96dDvCE22hzkTZiFcAqz398PM79VwNN4eCxAFEWKiskoHj1eh1sd2Rdcamf/h76BTBFsbhrhw0fPCnNWLzFRsnoiwsKuX1tE+HWC0Po1UzBWBV1L98i6b62mipbuIWFAhMLLdQ7KyHYXJihHcM6hQ3ZG6MXNiPAdLhgY6Jm3F0uFSBCzSiAtxFdbRZ/gahKVg9OfXTchG7th/c6S49MjMGWObEJtjxSDdqnv7yO42J8tfopY5g3PZWNaiiGYMcysIuzti+sDizwEx5/beYtIKyN7SpPz6rRs6l6+6nr6N3lRD+6Osm7wecma4erhwgLj02ejKq6fx/4TeAR1IBCouKG8CAAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAUdJREFUSEvFlu9Rg0AQxd9iGkjSAKAfxRk7SCoxVpKkErSSxAoyE/LRCdcAoQHkOceIw59TcwQJX1n2d/t29x2CAR4ZgIHrQO6idPYBLoVwbaukQN1A1u/BeFv9tlaJBuTgxjZ5M96BzKugGsQ/JCEoi0shBLZxMJmXeeqQ/SmG2MvUOhShjg8TzwLClQPnrZmIhJsLnwSYXQwp9dX9qiYrNTdKbFtJCfGbUgpfjvfTZ+Ow9A253acLCsOaZJ0hhyQk5Xt39D5kGZSMGLb60hViGms/SpaArHprvBedNjUX0D0Jpmt3l7rOiHE/chl26Meh6CpXa7oA5Jl46nGsWu86Q7T+pRsQKs+cVw3oVS5T44sdIcOWFdlWAkK1AH/522+QYoJMXmRry19uYDTIQe4TTdaNLLb4v25GW1XOjb/Oj8S5p7OJ+wQCwfQayThnJgAAAABJRU5ErkJggg==" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAaBJREFUSEvtlEFOwkAYhd8/oHEpcIGKLlwI0bhyJSw9givgHC6AjdegHMCde+oJTChLhV4A6gHsPDNtKEVAW0wwMc5mkvbvfP97/+sIdrBkBwz8QzK5nMmusuu3Ad4BeBhXirdpSb8LOR76TSp9LVo9md10raj6WnQDhDeulLo/VlIeTXugNAF2AOmEBwpt84yAM6kU60lIeTib6EDq3kXB+wxfsevE9WumiIRlFMTdJ5UAbwj4GNapYKS4f0NhL1RYLR59CbGefUvlOUl2vUmJAOcADrXmVU7UaQgxUMARoWdsfq0W7NCAJNVAJB8VK0pfCxs5SDcA21ExHUJqZgfk0jzTmvd5pQ40OFhWwM58bjEknIGW0KpMS2DF9YRHgWeaSAYjhhy5s4EA2SGJjhSk/lIpOBtnskhTJh0JEauJm79c2OVO23FUt+BsUrE0+KVkZYUI7fFZqbXps6V0bTeXRYpSQSI1upHKNsJTIq11g/72jzcFIWxPt0mxhLBgYkpE14XQ1u+qv+76SKUk6yjS1me66tMemsqubQ/7+3Z9AKAPvxq7cdh1AAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAYVJREFUSEvVldFtwjAQhu9cOkBggZD2sSB1gtJJIJMAk0AnASaoRPrYghcgDNDgq87FwXGjQIiF1LwRwN9/9/93RrjBgzdgQC1I+L4PxR0tjDB1wFf5HMjoYzcDhQP9Hmm+6XWmtvhakMdkP1BgQTLsMqSbpAsEOEGeOvH/hETJbgwIoe6WEquvfjD3Xsm58FR6oj1ANcwPYXOPivmdOnpyVSU6RfdqDISjKpUGcpXxWhngpAAgkHYVdiW1IbqKFm0NgACWlGHMUfUW4Yf1fkRIMwPZ9Nq5b94ghVYRyE2/3TVAbxC3EmMug7xB3IMAaGJ2kTcIK47W6dZOEpsvCN9IqBc71qURtkSZNpcOo1ZMNHMj685MIwgfxt4opGG+XUum0iQvSlI6fX1qb2Ul9nk8N63W7/IzT5aB5Lnhz+5cIWHcaEGWrZjCtAOAPVcXV1K1u/SNaO83Z64aQ/7sNwIpEOPPXrB0hdW6ft0/cwoPQGNEkupbTI1PXiHnLqvG7boUwL/7ARSMQClT4GSCAAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAa1JREFUSEvVVVtSwkAQnF69AHCBgFb5Y6jyBMJJNCcBTgIewy/CCawifmrIBYALmIw1Gx67IWSDWJTmjyU7Pd3T0wFd4MEFMOjvgHSi5YAJPWENJk+zVxwiU7PPbmPiUsPJpB2tprvC2ACYVcGT+L4VVAE5QTrRihWhz0weg8dlxWK/WVmnFggxJVTGYoN4NsjNfP1sds8qeySGdZZ9ob19J3loJEW2B0yk6DFZjukORrC/w8PYb42ssZk/bqN1LyOeutxy0KkFIg5EYLrOYtJ5X46LUrgAmShUjBeTvZwt/GZ/e9cGma8WVQM+AGRKFBCkxAMQ6T3SD1MSd5u7OblBwBOkeC1jxIrvdFMFI1SC6MUzOhLaV4TRqXOqlKsIol1DPDhJwjx7rBSw5Cq6y7amywL7/yUhPvxGWDp4OZQwJMIwb8j0fw0QpgSEUTE0S2PFe1vrpJXtleyyyosRMjUzz1xJXC+7Sq1FeXyAvLOz64DJBlCkTFMK1TUvfgFkPyOLkCSz7B0oMbe7jLRTLrmkXYfsiRn5V1FUAid66Qph+GOQGr6qfKUWk38B8g2N5cIa5PrzbwAAAABJRU5ErkJggg==" alt="icon"/></div>
  </div>
  </div>
  
  <div
    className="mx-3 mt-6 flex flex-col rounded-lg bg-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://gitlab.com/Mxia09/microservice-two-shot" target="_blank" rel="noopener noreferrer">
      <img
        className="rounded-t-lg"
        src="https://i.imgur.com/Ogu7dTV.png"
        alt="Wardrobify" />
    </a>
    <div className="p-0">
      <h5
        className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        Wardrobify
      </h5>
      <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
        Wardrobe organization application for hats and shoes. Seemless integration of multiple closets and bins to allow for further tracking.
        
      </p>
    </div>
    <div
    className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
<div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAvlJREFUSEu9Vr9PU1EYPecWDKNtMVFjtFQ3aY0JRgcNkDiY6OjiBOwOOqlTZTDGOOjiaICJf8GNsukEWowOWJ+J0ZhQMMbBxL57zPfw4uPZiiKhU3vfu9/5zo/73RK79OEu4WBLoKMv1sZJRO02ouhkPso2Zs9tLY5R7/Q8vN8VqLSwVnI9ektxwlNjpCInN7Ncyddt87HG2oiXpuBUhxAJHFGbE93AugKVG62aFWxWipObClPT9tsK58DJAJx9P8u8O9BSayrNIGwsN1ZfEeh/UynsSxdLGNKPNQeLE518/ycg80NQwhTUdGC7wXhbQI1WjXLv3lTziVSHF1fP9jjM+pjnPHUofA+ebEs6C0Ku19cgXpLwFUQJ0DeBrwF8/ilNnxOGBLwXETlgkMLj5Wrh5pbSrSfNj0EcN2kIdzVu41SyRpSy+peXWlOWON92M5ZQQLfD3rSsidIBPQHJaS6tvRVSnHtJ5+83KwUOND5ViZ7EI6E9qfaeL7ZHco+Yi49bI+lmfczRIO0GkBWld/PBk2BwDD/r5G7Zenlp9SmE0+thwLPmYOGMBcTT383BXQlR/7VXtbeVwugmRgON1bn0uUjFWQ4ctSLlRusDwAPrz/SxWSke7AaUJNT54SD3BqMQ3TTdZLw4PyzPkWa1MFB+3roGxwcJjtf15oniQ2vQUZGEKPhi8rFHU+nGN50jO3QxVAvjxkaMAdsmJ86YfKWFtb2GE53Mfw5d++9u0ryyd0OYHDmRlvK3A5tEO4cRD3+R5GUBdUgrBM9L7o6jVtYJsd85f8NLdYJDoPZLXCT1JJu4TR5lsx8OoIObTxyhbkC+T+QKhCUI4yC/Ubxnk9v1+lo2TOmafxyqBpKmH8DDUA2Jst9Z83diqH6E1NesFvM7NlSzUhgjgRco7LeDbRMhHMiEEf2RTv780aN03JNw2OUH1UOhZGqIJYuw3b6WzG1dfEH3TrdrkCzcQUnHmany1x51msD/s7bln5P/Kf5X8d4pgFBn1xj9AGsZ9CoEwX/ZAAAAAElFTkSuQmCC" alt="icon" /></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAUBJREFUSEvtldFtwjAQhu930gECAxToa1OJDegkbSYBJgmdJNkACfpYiBcAFkC+6my5TdqXJlipWuGXOI7i//7Pd2dQTwM96dDvCE22hzkTZiFcAqz398PM79VwNN4eCxAFEWKiskoHj1eh1sd2Rdcamf/h76BTBFsbhrhw0fPCnNWLzFRsnoiwsKuX1tE+HWC0Po1UzBWBV1L98i6b62mipbuIWFAhMLLdQ7KyHYXJihHcM6hQ3ZG6MXNiPAdLhgY6Jm3F0uFSBCzSiAtxFdbRZ/gahKVg9OfXTchG7th/c6S49MjMGWObEJtjxSDdqnv7yO42J8tfopY5g3PZWNaiiGYMcysIuzti+sDizwEx5/beYtIKyN7SpPz6rRs6l6+6nr6N3lRD+6Osm7wecma4erhwgLj02ejKq6fx/4TeAR1IBCouKG8CAAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAUdJREFUSEvFlu9Rg0AQxd9iGkjSAKAfxRk7SCoxVpKkErSSxAoyE/LRCdcAoQHkOceIw59TcwQJX1n2d/t29x2CAR4ZgIHrQO6idPYBLoVwbaukQN1A1u/BeFv9tlaJBuTgxjZ5M96BzKugGsQ/JCEoi0shBLZxMJmXeeqQ/SmG2MvUOhShjg8TzwLClQPnrZmIhJsLnwSYXQwp9dX9qiYrNTdKbFtJCfGbUgpfjvfTZ+Ow9A253acLCsOaZJ0hhyQk5Xt39D5kGZSMGLb60hViGms/SpaArHprvBedNjUX0D0Jpmt3l7rOiHE/chl26Meh6CpXa7oA5Jl46nGsWu86Q7T+pRsQKs+cVw3oVS5T44sdIcOWFdlWAkK1AH/522+QYoJMXmRry19uYDTIQe4TTdaNLLb4v25GW1XOjb/Oj8S5p7OJ+wQCwfQayThnJgAAAABJRU5ErkJggg==" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAaBJREFUSEvtlEFOwkAYhd8/oHEpcIGKLlwI0bhyJSw9givgHC6AjdegHMCde+oJTChLhV4A6gHsPDNtKEVAW0wwMc5mkvbvfP97/+sIdrBkBwz8QzK5nMmusuu3Ad4BeBhXirdpSb8LOR76TSp9LVo9md10raj6WnQDhDeulLo/VlIeTXugNAF2AOmEBwpt84yAM6kU60lIeTib6EDq3kXB+wxfsevE9WumiIRlFMTdJ5UAbwj4GNapYKS4f0NhL1RYLR59CbGefUvlOUl2vUmJAOcADrXmVU7UaQgxUMARoWdsfq0W7NCAJNVAJB8VK0pfCxs5SDcA21ExHUJqZgfk0jzTmvd5pQ40OFhWwM58bjEknIGW0KpMS2DF9YRHgWeaSAYjhhy5s4EA2SGJjhSk/lIpOBtnskhTJh0JEauJm79c2OVO23FUt+BsUrE0+KVkZYUI7fFZqbXps6V0bTeXRYpSQSI1upHKNsJTIq11g/72jzcFIWxPt0mxhLBgYkpE14XQ1u+qv+76SKUk6yjS1me66tMemsqubQ/7+3Z9AKAPvxq7cdh1AAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAYVJREFUSEvVldFtwjAQhu9cOkBggZD2sSB1gtJJIJMAk0AnASaoRPrYghcgDNDgq87FwXGjQIiF1LwRwN9/9/93RrjBgzdgQC1I+L4PxR0tjDB1wFf5HMjoYzcDhQP9Hmm+6XWmtvhakMdkP1BgQTLsMqSbpAsEOEGeOvH/hETJbgwIoe6WEquvfjD3Xsm58FR6oj1ANcwPYXOPivmdOnpyVSU6RfdqDISjKpUGcpXxWhngpAAgkHYVdiW1IbqKFm0NgACWlGHMUfUW4Yf1fkRIMwPZ9Nq5b94ghVYRyE2/3TVAbxC3EmMug7xB3IMAaGJ2kTcIK47W6dZOEpsvCN9IqBc71qURtkSZNpcOo1ZMNHMj685MIwgfxt4opGG+XUum0iQvSlI6fX1qb2Ul9nk8N63W7/IzT5aB5Lnhz+5cIWHcaEGWrZjCtAOAPVcXV1K1u/SNaO83Z64aQ/7sNwIpEOPPXrB0hdW6ft0/cwoPQGNEkupbTI1PXiHnLqvG7boUwL/7ARSMQClT4GSCAAAAAElFTkSuQmCC" alt="icon"/></div>
    <div className="inline-flex items-center justify-center"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAAXNSR0IArs4c6QAAAa1JREFUSEvVVVtSwkAQnF69AHCBgFb5Y6jyBMJJNCcBTgIewy/CCawifmrIBYALmIw1Gx67IWSDWJTmjyU7Pd3T0wFd4MEFMOjvgHSi5YAJPWENJk+zVxwiU7PPbmPiUsPJpB2tprvC2ACYVcGT+L4VVAE5QTrRihWhz0weg8dlxWK/WVmnFggxJVTGYoN4NsjNfP1sds8qeySGdZZ9ob19J3loJEW2B0yk6DFZjukORrC/w8PYb42ssZk/bqN1LyOeutxy0KkFIg5EYLrOYtJ5X46LUrgAmShUjBeTvZwt/GZ/e9cGma8WVQM+AGRKFBCkxAMQ6T3SD1MSd5u7OblBwBOkeC1jxIrvdFMFI1SC6MUzOhLaV4TRqXOqlKsIol1DPDhJwjx7rBSw5Cq6y7amywL7/yUhPvxGWDp4OZQwJMIwb8j0fw0QpgSEUTE0S2PFe1vrpJXtleyyyosRMjUzz1xJXC+7Sq1FeXyAvLOz64DJBlCkTFMK1TUvfgFkPyOLkCSz7B0oMbe7jLRTLrmkXYfsiRn5V1FUAid66Qph+GOQGr6qfKUWk38B8g2N5cIa5PrzbwAAAABJRU5ErkJggg==" alt="icon"/></div>
  </div>
  </div>

</div>
</div>
      </section>
    </>
  )
}