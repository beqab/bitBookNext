import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import Search from "../components/search";
import FullPageSlider from "../components/FullPageSlider/FullPageSlider";
import ArticlesSlider from "../components/ArticlesSlider/ArticlesSlider";
import HomeSvg from "../components/svgComponents/homeBg";
import HomeSvg2 from "../components/svgComponents/homeBg2";
import { Button } from "../components/common/form";

const Home = () => {
  const router = useRouter();

  return (
    <div className="homePage">
      <section className="firsSection">
        <header className="header">
          <div className="container">
            <div className="header_row">
              <div className="heaer_logo">
                <img src="./img/Logo.svg" />
              </div>
              <ul className="header_menu">
                <li>
                  <Link href="/">
                    <a>Hotels</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Flights</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Hotel + Flights</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Cars</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Bitbook Dashboard</a>
                  </Link>
                </li>
              </ul>
              <select className="curencySelect">
                <option>usd</option>
                <option>geo</option>
              </select>
              <div className="langSelect">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="15.413"
                  height="15.413"
                  viewBox="0 0 15.413 15.413"
                  style={{ marginRight: "3px" }}
                >
                  <image
                    id="usa_flag_1"
                    data-name="usa_flag 1"
                    width="15.413"
                    height="15.413"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAA9A0lEQVR4XuyYQQ7DIAwEva3//+Noc0zUQ1EXajfNzjERpxmQASTjvphH3BqTcQBhPaIbw5l1eXnpBjMxZKl0B8aeGPQAYJntcXMyBioB4KdlOxpqIYwDwCWFOwqqIeTpJwThNYEYLgwCn94C0C7cQAyCS4bA0jnBcGEQ+MYQiBrR3u3Ksa4PgWN5WCrdwXAiDIohUHgK7jkN/CYwFi3s+uP7mxNgi3/FPOOFnbvzAJajOtr20+fMzIablTNKIBEkhEUUORoTgyMmYzDGGYOxjW2MwRhssHEg2NgGnLAJJhhjMgYbARYYEALxIQnleCVd3bRx5pz+t6a27q2rW/pEfS7/P/93VKdm7+6ementPh3e7h4FRx11FHvttRdXX321Av7VN5c19PSUpouRZgAQEEAVQBAZIHvWGHL5UHp6yogRAAQBFFUPYgYIngiAgALiUUVamproLRRw6hE1AKgoov2iCgLqEBHAAIoKqId8LsR7qFRikMGbQwAQdPCGAFXCwBJlLL2FCiLboGGbW0tQ5xkzsoUJY4finP+/BQ3ru3lfVVHVCrAkn8+3i4gsWbJEPv3pTwMQPPHEE4hA++ZOf9G3fnvqXQ8/91VXTXbDGAMCWBAB9SAKAnhAQ9Aq48a2csaHDuCaH/wZMlkQB4QAQBXEDCTXKngLJGAdVOAbF3+IX/3+Sda1d4IFfA5sDM6AAGifACABEAB1ZvcUOf3jB9C+qYfHn5oPmUaQGIwAHryAmP71BgDwChpCUmLGruM5/KDd+NFP/goNeaBOAwq6lVApYARUAer3UOJT5x3Gdy75ED2FCqD8vx6qgCpePUmSUJvLRcxPRo8adWOhUIhrfO83Ad1dXXrqhd/91NPPvHVL4/A2ypksqMGIQcUgGMCnU0XJhAERSkdnzOH7T+PcjxzGnfe9yLqNRZpbGynGFby3oNm+XWcAFepaw5LLOro7q0ydOIRzP7o/77y9hrsefpW2oSFxkqMaV0EE6f+tQQRBgZh8ppG45KlYOPXkg1i9pp0nX3iT5qYIE+QoVB2CYBAUgXQqKh5VTzYKsN7T0VXl2ENn1M5xCL+/5wV6K56G5jzFShXVAMih2k+Dbs1eEcoqNDY20NTYhEr4H3YRdbtrtH/3473HOUecxBMr5coPV69eM3Pu3LmfBOI+ASiVqpMvO/eEa88+8zhu/u0/+OfLbxNGASpCknjUJf0K0FVpGNbIVz5zPO+bNopJo4YwakQbd936Rbb0FLn74de4/Y/PggFMAir9ZgRAYyxw+ilH88EjZzCsOcfItiFccclHOf/M9/PPN9fw/VsepFwugc0OphADVWWfWVP53DmHMbQpw4ydxuN2ncJOUyewanOB793yKG+++Q4SRKjoAOUtqqiLGTpkKF//zHFMn9DG1HEjaGtr4IFfX1yjocId977IvQ+9CAEgyX/vr4lA2eMxhNkMmUT/36cNVaFf/acawMQGESGXz51dM7ePA3/oE4BTTjnp6OHDm1q+f83vmPfKBsJMDo/Bec+4sUMYPbKNKIxABUGJ4yovv/JfHLXvJKZMHksSV9ln5lR+/eBclq9cy/5zZmIMiGo/AxQQMID3jiXLV9LRswNHHLALruprzBtLZ6nIy/PfYpfp4wnCKagOttkIKJakUuCNhcv50rnH0pAxSFPIztbz4FN/oaUx4uADZwFSv76nvhDBIKLE1SovvbKQI/c9ngnjR+KSCnvP3Imf//EpNm7azAG19UaUlAZ029GUCJVChZ0mj0UIyESZ90R4oSjqFa9KYCwGAVVAmDxp0seBPwIaAGbipAnT3li8kuf+8TZ2yDgcCblsloP335m9Z0+muTFHYAzqBY9iRCgUy6xa38msnSEIIyqVKj0Fz/HHHUYQCJBgMIDgBQSPqOAxGPFUEujqcrjEE0QBAOvWFdh7n9nkGyz4uvLG4cUgdeFL/4mAhpR6utjc2UvjmGEArN/Yw8ixYzl1+nRQ3+/IiQKCaL8zKGLoKRRYvX4LO+4wFhtk6OwuEPuQU046EmM94DBap6EuDILgBwiBkMQx79ttPABhGPDeGP0mQAQUxXkHQBAEk4EGoDcA8rf94cns17/6RXacPoXFa4pkGwL2mzOdSVPGsnpDD4XlG1FsegJU8WowznHkrDk8+o/XefaVpZxz0hwy+YCn5/4XmVwWUQUsoMRJQhDaOgMFFCplzykH78jbq9q56/6XOXjOFIaObOKVpxciYYDgERFAUzNkrSBiQT0q4GLH1HFNYCw/uOMJmhszHL3fzqxZ28WGwmYCWxcABOcSFAhsgKKA4r0lazwnzdmJex97iTffWc+ZJ+2Pt57n/lWjIROBKohNj4lzBNagW4cBIlSKFcYPbWCvGRMREd4rQ0TSWRcErLUA1I4h0AQUUwF49rkF0cbv3kMQZTC6hSHDJ1C1wvxF68hbiCy8uaoLDRzqFXWGobmQH9/zInMXLKHkDE+/sqLGkKG8vnQdmBBEQUMC8Uwd2cg7a4u4wIGCKgRa4fEM/OTuv7G+w3D38wvYe+eJLFm1ns5qalER4/FVYfKoPBt7i/SUBSMOAJcklCtD+ex37+P15RswOJ6Yt4zunjJL1ndhwwBMgo8DRrdGRGHAivYiJnLgBXXCiOYs3739WZ5/cylVb/nba6sYVWPk/MXrMEEIgBIQGsek4Y0srtGggUdw4C0AIlDsLXPoHuN5b45+QTDGUP/bAHnACDBGRu53jTbvfKY1DhNENA0fS9QWUux2nLzXePbfYxIXXv8IYXNI4INUkpCYclWIIksgDpcIJlEkG4AHVUfVw7jmgOu+dAIXX/MQ66oxoQErSoSlHIMGEAQG7zX1BfKBJTEJThWnFl+s8JOLj+WhuQv460uryWZDrBrEAInHecVmBIBqrETWIRKgzpLYCqXuhAtP2p2xI1q5/OfPkGmJsD7AGFAc1VgII4PB42IwCkQWPDj1VBLPjHGNXHrOkXzuO/fTa4UARcQiAgIUe8p867yD+PK5R70n8eY0CohjKpUU56iZ+n8sPe64444BlhkAo14yNsCYCBXBSoApJbjuHg6YNYmjD5rBDq0ZWo1hSK4BEUXF0BgGZNUBEBlLkLGIODIBDMtlySUxe08dxTFzdmGPqUPIa5XhDRkyJsJpQJCB0CqBdwTiibLgxGA1ZEg2S5P1TBwacdwhMzjsfZNp9DHDMyGNGYuYBBMKmdBigAClwQaIjcAozdksQ6OQtoCaozeNo2v+zIgGS1toaMvmEQFjLQ2hJVJFgMgGmMggkpCLhBH5iJyLmbPrOI47cBd2m9BMgyQMy+eIrCCAEcEIBNa+Z/HmwFqCTESYidKjjUIAAQgAFEHFAaCxZcKokGs+eyJTxo1g5PBW8rmIp2//HKVyhR/e+Sz3/G0RNhTUOLyCULeN4vEOspHhkjP354h9dqSpIUcQWH56+an0Fks8/Pwirq+FmrGPAYMgqNH0CCAmxsVaY9hMPvvRfchHGYYNaeSsmn0+5qCZvL1yI9/+2RMsXl/FBuANgKACah0C+FjZaXKOy88/gdHDWhk1ojV1zp75zRfoLZS49o6neHReD0Fo8EYRBZH0dZ0GoTFn+eb5h7PPrhNobWlITcgd3zubQrnKXU/M55Y/vZiuQQySjdj07KssW72YSuwAEACtRyEq0H8EGPTeu8b2lD5kVgcEqNr/mQeEPnPrvKO3e0vqi4nAorUrABgoAAgCZEzIwpUbuOiGB/npRSczecIIAPKZgK/e8AAPv7qYvGkk8eDFI1jEG0AQDKGp0F2tcM0vnqFYrHLRWYcBMGx4nl/98jluvfclKg7CICTxAKD4PrzACEjguOvxVygUuvjeRScB0NiQ47lXl9bu4VHWdHYTRAqaQTGAotoP0eRMyMuLVnLpjx7kJ5d8kInjhgEg3nP5jX/h72+tIGeaiD2oeBQBb0BANCCwFdp7ilxx0xNcdt4hNeHbD4DWthw33PQ0dz4ynwSLtQanikQBpdcX0fXIMkpi/70oXutTFHRr7FkH8HlAmKz9jMfrAFTI+YTuwiZidaDQLcWBAiDpFACcgbwNal5xJ88vWM6hNfWdxAmbugs8Mm8pYZghMYpXQdSgCIY6Xm484gOsRLSXOnn8+YWpAJTLVTLZgMeef5uOgqOhIcJ5QQbkBwAEBUQsiPDo80u47IIqrY1JuoP/OX9lTXo30No6BLwj3fFK/waqU+Is5DTi5bc28vqSNeyx20S886xq7+SpV1bS2JjFC/XQ0gAgoihSpyEitAGrtmzmqX8uSgWgXKnioEbT25RiQzYTooARjwFMFBA250lUtpuEHfyebmfnD2D0gMWqA3b+YDAIEJ8QmVz9PSVIPBQGaAClb0iFqm9l/PAsB9ds51d/eC+vvrmGay89iSP33pGHX1xBviHBqEURFIdzjigMcSqAx2hCDjjx/TO4+/GX+NGvn+Ib536Ajx46i/nvPIkiIEo9wk5BmSAIERE8oEA1qXLigdModJY4/oqb2G/2JA6ZM53fPvwChdgj1tfhap9GBCoGY+thIgnlJGDXHZqZsfN4Pnvl79nY0cs3Pncsc3abwLxFG4kyMWABwasH79J78HUa8I7mKOD4I3blF/c+y2//PI+rP3MCHzxkJj+4+wWUAB2AvwqqBsUMTBrpvwHzymCmI4AOPrFqX55mwO5XBFRRbJ+EKDJQAwTWgDgAjEaoCI0NGb5502P8c8EqVANO/frvGdc6hDAUjI/wJCiO5kyGcSNH8vbyNQQmBONx4mlqaOCRvy3h5YUr6EmEC659gNk7j6ax9n7iPUZBRFPhmbHjRJatXk85dhgMXpRMFLG2o8CZl/+BZZtKvPRfG3lp/joack30JmUMivUQ+6R2/TYqztPe0YU1BuNDMKRCeckP/8xrC9cjalh+xd00RjmsFayGeBxeHW0NOYa1NrJk1QYiG+LwqAjNjU387v7X+OcbKyhhOefKe9ht6kjy2Xyf4QQQ6hGBOARFtuah6r8DBg+WJgFk4O4XVUDBAH5AshOVBCMOUQ8CRvwAJHvMxJlHX7u8OOoMIyEmDMgPb0PFUHVKJgqwAtXEI6rkwoBEwTuhmsTsvdNILj7jUM759m9xJoslwFqFNMSCMAwxojjVdKdGkUXEo5WIxDhCifnVt0+r+QyP8vryzeQlB1GCiFKNPYghDAyoUK0mBKESiMV5QYFCsZurLjiade3d3Hj/PJpyeRAIjaaCVvVp8gpB05AuAMLAkqjiE6EUl/lATbN98IjdufDqPxBkGzBqsBY8jmoVgjDAiNbXJKlgKdq3GytiOLdrLWd3rKKs5t8H/dm++hj8He0TiAGKqe4D9PZ2UPUOBBYkvUu/1rv4WGBpADB7xnjixQbRCB+F9KjHBAGRMaDg66GEQfHqac5nGJaL2Li5myP2HM8Rc6Yxa8oIVm/cQq6hlQ2dBZJUeATF121laidBhWxgGTY6oqenwE7jhnDE3lN4cd5Y1q5rZ+jQkNpyekquDinT5+BFkUFRnMDIoY2IL+Iac7x//11Zu2Ej9z35Kq1NWSooHd1FrBUiY1EFRQitxYhH012fpSUMaN8Sc9Q+EzhyzrQ0MdRdqhBlm1i/pRdVQyYCX6fBCinApNu22f9+/45ur7BHtmK8gFdAEGSQY7i9ESjwvl0mcfVVH2fJynauuuUJXlvZSSYEVBABtH568cTeEQWGL51zEIfMnkpLQy5Nrd51/Sfp6unlV3+ay21/eQU1dQ9dPLJVpOKrMcfvP5MzT9yXlsYcYRBw6SeP5cKPH8bT897me798mm5VzFawqiKIQBIX2WXcqJqHfjIjh7cwrKWFncYPZe7vLmLJqnau+PmTKQMzQYBh4DkEIfGOplzENy84jNm77EBKQybDgz/9NJ1dvdz4+2e4+9l2xGYBi8Fvp8deQAHZLji/fUGQfpOPbscsqDL4Nf1CoFu5CzLYIw0A8g0h69Z18aUr72TRqi00jhmDKggOMPSnUBRrDOu39PDlHz5YQ7+O5vyPHAiQMvGqnz/Gn//xFjbTgBHFaLKVRQQjjtgbbrznJdZ19HD9JacA0JDPcduDL3D9r/9BnAg2UtQPVKdWFRUIozxP/mt5bf193HzZqQwf0oq1AYve2cjnf/AnVm/qJYwyeAXwW0fLWGtZtmEzF1/3AN+tpYRPfv9sALyHr//kLzVYexlhvgFRxeDwbG/UsQSv29922/f0kcGfA7LNiGDwax2wVlBE09l3rwPDQAlZv6mTt5esJts0HNTUd78iOARADKqCEUMUWDZ39fL62yuAA9nSVcAY4V/zl4LksHVgSQX6g1YDoiAGrMWr5+XXloEKHV1FhrTkWfDGSrb0lqmViOHUg3hQAyiI4kVRQDxkwgbefHstXd29lMpxGiau2tTB4lWbaGluxfddnL78nRcBBTBEQZa1m7p5a9k6Tga6ekppRvOVBSsIgwZMHedIr6mmnwY8ggxic1U8RRwl/TervLZr9hXVQVplEOO1vyYAp46Cc1TxAJS8GygAv7jzSb59xd7sVjMFC5dtIVJLoA41Bkkxfo/LGUKNUaKUOa35kCMPmMGVNz/E/U/N59ovnsQxh87k5j+9SpSxBC7E2QRBUwcyMllEiqgPUANJNeG4w/biyXlv8e0f/YVTT5zNUbX1f3nhHRI8xgsp3KsNVH0Za+t+hLcoSiVO2Hf3iZjA8OEv3MzQtkY+fdph7DJxJMvbi4RBBksVZwymCqqKyRisJngiEp8wqq2BObOncun372Hua0v53sUfrNG0C3c/vYh8ENVpiAGoOk9kMiAlVAME7auPoFhkxDH7M+2oC9P7+g80825XKLZtbdJIi0qxRDWOUaD8xnz45pf7BeCNt1bzhW/fRTaTxQag4onUU0oco4a2MnJIM68uXkXeQIInMY6Ghkwtvn+OVxYtxwc5zr/yAaZOGkK2IcRojNGAxAeEKLtPG8Zbb28gMR7EID4hlw/5x+ur+dWDc+mtZvn+Hc8ya9oE8k0NlCsVDAGqgia9zJg6mg3tvXQUYgwCJsYGQmfRccG376sxvBOja1myqgfRCGN7ETyhOuLYMW70sDS9+/aKtWQNVEXBeDLZLFfd9CTzl6xCbZbzr/gTY8Y0EWYMRhOEIBXYXGCYMXkIC2saRyOPk6Bf5Qpo7MlPGEnzPjPfsw0ICUq1WgVgWeNAsRtjRu93rbRMP0NEiYJGaM2DhhR7LWcdOzH1kM/95kNkcnlMWCJjs3ivVH1CJjIYlMQDiRBmQtRXU9w5VsPEIXlu/MZHuPDy37O66MioIRMCFqoVT2AjTOBRb4irCWEGDIKreKrG4qsFfv6tj/DnJxdw3z8Wkc8GBFYwJsIlDkXTMFHFU00cVoTIBFQ0xscBhV7PF0/fnbGj2/jK9U+Ra8hgwjKRZHFeUxwhDOs0JKA+DftSGhLnKcfKHlOHc/mFx3Du135DDyGh9wTpGsEDxd4Sl33iYC459+ht+oK6FQDYbx3/h+Ndnsur4uvZwLoA8I/nnlt6/HHH9YeBeCG0EWDxThjXmmdUbW5u7+HYOdM5ZN9d2GfHZ4jV4qMsK9cWUYFMaBC1iLdkUFymhPMJjWETEyfk6d68hUNmT+SgPaZy6B5TeGHhSoY0N7O0vZtq1RFGYLxiXYwngEgwHhDLjuPbSFxMY9RcC9N2pdRb4Y2Fyxg6fAjtXa42uzChS9W0esGLJTIGJcA5z7gRTbRGlq6OXo7ebxpjRrZx5w5zibJZSpJl9doSYiFd4y2oJYMjjso452jJNTN+RIbN7R28f88pHDx7Rw6csQOL12yhMd9Qo6GDOPGomK10rn93OZ1/t/bvXZ9L06n4dAKAH+gDIB7rBW+qxAjZMOLrFxzPfrMm0pDLEBjhr7dfTHtHN9+qoYNLVi3EWkvkIhKb4IMY4wJEQ/AeEseJh83irBP2JhcFII7rv/ExCnHML++byy13voCqBUnwAkqIR0AS1EcpYLTTtBF85bwjGd3cTD5n+dhx+3DiEbN57tUlfPvGxxAPhgAIUBtjgNRmS4UqjpZcK1d97hh23XE0DdksxsCjv76Eles6ajQ8yvI1SwkJMC7EBTFIjCYhRkPUK9Yrpx+/HycdOoNsJsAa5dZrzqarXOHGO59j0QMbATD1Ygvo7yd47w2p/xt8j0GfoyCACEGQ4Z01Gznn67/l+i8dx2kn7AdA+8ZOzrzsdyx4Zz1RQx5VIQFUFbzg8eAN1liKvsI1Nz/CujVr+O4lHwUM1iZ8+/p7uPOxt9IQzRrAmbpkCoIH6jmCQLjvsddZuXwNv7jqLPK5YYQB/OHJuTXmP05RDamadoLHoQoIJICS0sCb76zivK//jhu+chJHHTgDgKXL1/PJK+5i2fqONMxL1SPat3s9CXiDscKWUoGv/+B+NqxfW8MoTgTAuQpfufZOHn5+eepTiAioR72Cvtc74QQYKKwABgBvUUkAj3FKLgxZ312ivauE97BxcwFvTE0wOkiLChIQFG8qqFrQEG8cWg+TJHQUsCxa1YkxhlUbOlKcYOXyLSQaYIzFk6DiQQxgQSwIqMQA2EyelSs7CSRgfUcXABu3FNnYm2AzBjRB1KLGgVpwISpVwGMTyIQRazp66SrFlKuerp4yZQ/LNnSlzLOJgDqwFdAAfIgaj6gFHCZSumPD8nU9AKxu70iFbsWyLWBT5g8K3/7/fVBkPS2KBqgosVMmjWpl+tRhnHnJ7Rx+1k0sWbGOg/eeSrXsU2ajJp3iBa0kAGAc4i0Sh2TFc+Qhs/jhb57gsLO+x8/+8BRHHb4bQR2pEqOICEYVFxcRn4AKGA8oSTnm0AN3Zv6iFXzgvB/wqW/dwS7TJzN2aB6tCri60IpHqw6NPSDgA7xJqFZh+sQRDB2a4/Qv/IoTL/g5hXKRfWaMp1JW1MTgAlADCfhKAkJKmzgLsaU5AwfOmVEzGQ9w5Nnf5/7HX+LIw3dFXdIPsaUTlP+PBSATekABi9oqoSqBWL583UPc99wbLN3SwfmX/5ElKzvSEiq1CYji1dCS8+wzcwyu6lHxgEcVmnI57vrzXK795d/oKjVwxS1P8oeaWm/Mhn3gkrgAkjJzZk+kMaOQGFAD4siHwmtL2vn01feydqPhnqcW19T//YQ2RBQQBTxJRZk2cSgTx2RJEg8IahJCo1Rj5eLv3s8zb7zDm2s28Jlv3c2GzUWyQfodEHBOGNYi7LHzKOKKA3w6Uchnc9zy28e5+Y8v0VHI19DPv/D4i0tojAIGsVzewwWh1iDW9k9jqA8CA4wf08KiLRXEeCIVXEOGdcUezJYMuXwOrKNYzrBk7WbCKISqkLgKxaoya8pwPn/Oobx40S8plSG0jkxgKWsDC1d0E2YsigMyvL1sC1EEIkpcFhKX0BQmfO7MQ/nOj+7n5be60rAyiBQbeJau6ECsJcgrkYYsX9uLNXmM9VRdhcSHlHpKfPiYWazZsJFXfv08jQ0QeUGDGg1dnUg1Sy4foaJ09Vo6yh2EYYRWhYqrUCwnHLb3FD587P48f8ltxF4ITEIUBBTjkEWrusnkLCoO76MaDR0EIaiagSGeV1CP9/5/AuuA/ud6A5xzuGo1nSKSHgfgAKed+9lr31yVPYMgoLNi6CjGmCgElT4pArAG1Pm0D27iyCa6Nndx1gf35rOnH8ZHv/iztDdQMg0sX7MJrw4Ri+IHuiGpA6dMHDuEpFxkytih3H7tJ/jhrx7hrsdeobWtjRXrt1AseDB+cBsWDvEwatQwWiKIKwVu//75tWt3csl37qGptZH2nphNm7ow1uB18CnwnuamRsYOz9NZ+96XzjuMYw+dxce+eAu9RUhMhtVrN+JFQSyoH8yrPqgVKqqck6/yiYYKRacASH2JymA1ITLg7743ZHAH81bZHO1/zYCXoFu/2X9/3juKpR5i5wFlfueGpV+e/1Q/DjBzp3H8qPYjvvTmMi770cO091SJFHTrsEbBKxh1tehgD059/17ksgHWwB9vuJCOLb1c9YuHeHvVagITYkhQzFbke5JqzJ47j+arn3g/bc0NGISLPvEBLqxBub97eB4/uOMpVEEYKICiioolVs+otoDvff5Epk0eTRBIKkh//+OlvLBgKZf9+K+0KxhAZLCmdgphABd8bA7H7j+DbGQQgQdv/gLr2rdw+S0PsGR1lUAs4hO8Cuo9qto3SY8gQFUMPWuW0bNpKSUMAzpa60cVQQBFBgiAQL8AiOn7W0QQUy86RSFdLwOyhF4V+usDEQYLiwecd1TKPVS9AkrVFQaEgamK/Pu/FvDJS3/NlqKlccQQVHVQ/ZoHjDV09la49Jr7WbV6LVd+7iMAbOnq5qyv3MaLC1eTyzchXlGhb3Ef8QbQLLff8y/eWbqO2645lyEtjQQIV//sYW69ex5RrgEb6tZJLTBg1BMFhnkLVnHqxbfyi++cyT67TwWBh56dxyXXPEghtkTZAL8NtWoCw4bNvXz+ij+y7oL1fO70YwBYsXo9p9U02cIVm8lm8lS1iqpus7Cvjx8CElhMLotVg8rWRTz630KB/ULS/31RBXy/FlaDGAFjEDEYYxAEEdOnO+o7dEDZmADiEgwxxntAMUkM1X4BoFJxKSTb3VMhm2tFVQfvHOm3KYE1lGKlXHZ4r7yzYj2jRg6hvaeACSNEFFAUGYx/qWLVYzLKpu4SuVyWxcvXMmWH0ZRKMbHENAUOp6AqW9kzgwdElTDKsbGnSJjJsn5jJ9lMlKKZvYUK2cZmvNdBORZV7YNGxStdm3solmLK5Zg1GzaTyWdZt6UbYwNQBygYA7p90FbTKXgj0F/UixoAARjwuyrQl5wUGZTnH0C694AD1y9ViPTH9sb2CUWfphABQFHUCF4ErWsW3boe4MbbHuXrV81ml5mTePOtjeQANYrx4J2iXgkj098h7pSGtiwzZ+1c86x/w4N/X8gVnz+Oo2uQ8S13P4cPs0ACxoMqLlHCIAQUfIBXi8ZljjhgV26/7+9cd8vjnHTU7uy154786anXiJMQMQriAMElDgl8SqCqogTE5RIHzhzP2o1dnHfZHQxryvGlTx3DlKljWLaqmyAjqHpIlLga4xKPNeDxqILGwpARTUycskMtTLypZjpWcPXXPsKR++7KXX99Gd/QXKfBod7jY8EGAaAIguIHSJcoGDxW6RsyKH3/LuNFVQYM2XqdDmgBx8dAvVLbABjqQpFOxWPV49UDYNCBArBifSeXXv17GvNNqT0VlNBBEsOEsQ2MHTuUF+ctJRtFeOPx4sjZkO/97CFWrO4gCJu47IaH2GH0ELKNeSDGqKZeekaU/WdPZO6ry0isIgrp+nzIw8+8ycrVm1LP/rd/eYVn5i9LK3MKlQRRgwgp8+bsPql2nY2s21IltAleEoJMyPL2Hr7wnT/QXTSsai9w0TV/wEoGTcokDkiUajlh8tSh5BtzLHhtJWk9n1WccVgivn5tzQys68aGDVx81Z2MHj6ETEMOIUYUXBLQmBVm7b4Dc/+1BAKD8fU6AZF+1oqiSDq3PWRAxc42hwiovqvH/fVfT6G+DPXgHABKffeTzkGYhQEwUZZSWdnU0YsJArRqKFQraZHEfruN55Mn7UWhFNMdV6mWFRFLbyVh7YYesrkGwsBgw4CV7RtBLSQBxYqjt7fAkGbDly44nMYGR3cxoVgt4CXGaYbl67rTaxMaMg151rYX6K1aMFB1RXrLCdVqL+d/dG/22HUknd1dqXAkicVIyLqOLkrVhDAQrBjaN/Swbm0HzinVgqdQKdPZW+boA3bm9GNn012oUkiqxBUwNqS3UGVzR5FcvpEosiCWtRs3YQhRF1CquLTMbcLoBr702fdjTJlC2VGOKyjKe3r0Cyfqk+0ggXgksGAF56pMGNHKkftNZM6sNk4+dCaH77ULx+0/noNnj2T2zmMR7/DiU1upeDxVFMHSDHFCY045aM+p7LfLKE4+bCZ7TZvAKYfMYP/pIzhkjyk0RAZxntBYBI/VBNQRWItVxapj9vTxHDJzDMfutyOH7DWd4w6Zyf67jebQvacyelgeXyqi5Yi4rFRKvVSrJRABC95VmTxhOIfutwMHzh7BCQfN5Jg5u9VoGssh+45l16mjUReTmrkgRMWhxCA2pUHjmNamgIP324l9a9c8+ajZHDRjCh88vEbDrqPYb9ZORDZCVP/H4Mx7ZQT98Z0BcagGVOMKHz/yED549F4phg/wp5u/yFuLV3NZDQ1LEkVCUJF+VA7B2wqKUqxWmbHTMC46/WMMbWkEjfnOJR9L6/Z/8JsneXnBSkRMvbWM/uYFcQhplzBNDZlahHEs0yaOQkQ5+YjZHHPwLH7/8PNcc/MSipUy1lZA+0MnVEAUVYtPqlzw4eN4/4Ez+mj46+1f46UFS/nq9x7ApYkrBR34ICofVPCqlKpl5rxvAp/92Lk0N+UQjfnZdz/F8nWbufLmv9ZoWIZYO7AyN3HvHtFRffefDy792k73kG519P3OJIDzgwUADNQ9/JWd3Zxz2V1s3NjJ5875AAAL317Jhz7zS1Z0l8nnI/CAWtTEGAXxFkSxCLEL+PGv/s6qpRu47brzsCakHMd85oo7eGzucvJNeUQMqILxOAUREAWPRULhiecXsWTpKu684QKmTxoLwA2/epirfvIIQa6RKAjrBFlUPOCAENQThMKSDZs54/O3ceOVH+K0kw8G4Ll5b3LGF+5gc+LS1i7xUk9LVxE1oBYUAiOUKsJ3fvAw61Zs5MbvnAsSsrGrh7O+dCPzFrTT0Jgb6JNlMrjWpq1aw7bP5Hf/2bYAIB2UkNJ+AUABr56kjgeo1vMexQECYMD4OlNdatPLzpNrzLKls8CadR00D2mikjiiMINoDNg+pM6rYEx9B+ExkqDW4SxgLPNeX8SsmTsCIFZAQNUjAN70k6am7kx5bGgplUo0tzTxysJ3mDJ+NNl8joSYXFgHZET6dn5f0alSpyGgWkxobGlg7bot9BbKtAxtoZx4oiCq0xDUIxVJaRDR+vk81grOOCQKqDrPKwsWs9uuU/De1XsDDKCg4AolRp/6fvY4+3DiOPnPP1j2XcqYoqCKc57YxVSrMSBUX/4nfOLsfgFALeDBKEiAqwgTxw0l19LEKZ/+EUuWbOKbXzuBfWu2+KGn3yJsEBBAYkgiUnuacYiCpkyEfAR7v286X/7uH7njgblc8NED2HfWbjz98jrUCyIONYAGaFxFghC1oL6Cq0KpUGbfOXtw/yP/5Iof3cce0yZy9mlHMHZUM1t6FSMBoh4Vj3cOoyFEcZ2B4CowbepYehLHiZ+4js6uEpd97RT2mDWV519ehs0LKgrGQRyRXjSSugxZVD2tzSEzdp7MeZfcygNPv8wl5x/DAfvuyatvPz2QN94TtjUSjR1JxHtvOKgLQBURyK9fvlVfQGhJ1IFYlAgJPCVX4avX3kN7V0JgcnylZjeHDx1CmFeUCBS8LzE8HzF75g489sJ/YcMIQYGQTNTCL373D1a2dxFlW2v4wDzGjWwml7UkziD10Ik45thDdmXuvCVsKpQQH6NJRDYSnn9tCfc/+TLeNPLcgrUsufZeHFkMHsGjxqd1hHvNHEexV1i4fAVBkEM1woQxHYVevnrlH+nsBTGWS6+6h5aWFsIsKFnApUmt8UPbmDx5HM/8c1H9aWgG0YAwaOa6nz3Cmo09hNk2rvvl04wZ2Uo+G+JQABBBAE08g4e+Jx4Upc6hcYxWYxDQfi1FIMDEcW28saEIJkMUQpRvpKu3gviQfLZuY11Tmkq1Efg4plypzbhY0wrj+fxZh/HEs2/QXVJygSefhdgb1m4pkMlFGFPBZhvYuKUXYw1oQLkYU9WYtki48IyDWLZkJYuWrSWfjchkMphAat/vxAY5rIkJA5tWBQcGrDFUKyUqTij3Fjn1+L1YubKbF195g2yjpNnIIGPp7CkhPiKbUxSPT/Js3lJIz+3jMpVKQqlcYI/9x/Dxj+7H40/PpxJCxnoymTyVBApdMbmGEIghk2djRxfGZNj2UN7bQwa3hu2z5xQmFYakP9rKDTFvrdpEGFo0RcEUBJAEK4KPE0a1tdbw97F0b9nCSe/fk713m8THj9+TTZt7icXywisrcD7B2rp37wPEe0QinPdEoXLo7N3AdaXAy+xpO/Cx4/elqTGirWUoz81fTUd3BSNZREG9BSAIABwuVvaYMZnxwxsolioceeAs2jf28Nobi2gb2sRby7pZXBOmFLkT3+cUiXFYMbg4YeyoYbxv1xF0burkg8fsycF77JQKUk0o6Kp4XqrRoMZhrQEvQIAoSL3lDTwDh75HBUD7Z//fA03A9IkjueFTn+av/5jPFbVMWsoswKOAgIKIAmCBrkKRaVPGcvGZZ6Tdwyj85PLTeWftBi67/kHKsUeiJGW4+LoQ9OVHlUpvESsx13ztdMaPbkOJueC0wznjgwdx3a2P8tjzbyH1kE5F+0kRAXEkKhSLFc766JEcvvcMAHYY0cYDv/wy9z7xL16qoZIo/TRoPy4ugBHo6S2y96xpfPIjBxJZAwq3X3cBry1eWTN991F1igkdohY8AP004Nn2MO9RATCA1KcZcLep2r3/iZdqYdNNLFmR7hy8l/pa7YeeFZCAUrXKFTf8ic/XYFgABNZu6ORD5/+ch/72OiYE60JMIqgqUj+HOo9LPJ6Yux/7Fydd8GM2be5ECAH41Ddu4zs3P0Liqoi1bD2sE2wSEUSWhUvX8OELfs7jz75FfXDrXc9w9kU/Y037ppQGVQZLvQrGBHQXern4yt/wrR/d30fDwkVrOeWcn/L3l94miAxBEmGc4X/zCADaOwrstEczYRDhgjxOFSOKSH8zoYigGBQwJkBMlnEjGtOnY8+bv7jm8e9EY7MQtDeieLzpb51SrziX4L0HBBEIwpC2piz5pkYefe51DtxzOmNHtGCMoFYQrwMwDhHwBkABR2AaydgCY8Y28683l9PSmGfyhKEENoOxeRQPgAxQgQIYPKR23EjCDmNbad/cw8Ilq9l5p3HkGgxBsRHF1a9nkPpyFf7XDUMKsDzCvNdXsuvO44kTN+ARU+JBPYj2Z7Ocg6FteUaOHs6HP38LJ33qJq6tqe737bEjxI7+H8zjnEvjT+8cAEYNolmMj5m9+45c/uO7OeW8W/j4RTcybtwI2hpC1IcYb+kfiu83IwjgqjGzZk7iyZeXcMK5N3DsJ37IqvU9TN9xVHpNhHRSF0BVEOgzKc4LY0a3EuZynFjTRCed/2N++ae57LXnTvhKjCAo9PkQfju2Xax5z9YEmiDARGHflCAYqAG6CzFX/fQvqROWCajjQgFVX2KXiSOYMnEUDz3zGtkgD8ZgxAPU1jzM5u4y2YYWfvKbZxk6tJmoIQCVdDpfJcLzgaN247Gn3iDxDi8WJCaTz/HHR19hU0cHueZGnnxhCS+/uR4yWUgqOBMi4qmUPUcdvguL317NyvZeQhOiHsKMY+E7nbz42oOot3R3VGoQ773kcyGBBRFBnKGSVHjfLjvQ3NLA3158g6xtQA0pDZVqwje/dx/dxZgw08j3bnqUtrZmosYQvGBESNTR2hAyZ7+deOSJBYgV0BDBo/0mFdfdS3XtRpx3CAL824jwdhrMZJsNZ4NrAj1JUscBRKis27hVb+DI/a4Nh848Q9VjoxAx4KpKpVTlM2ccnHb5HHXBjURBQCY02FwW9Yb0+8YAiohBnWDCBLyn1FOhWIjZfcow7rz1czUw5scsWbORbJglm80gAqqKMbYfh/ceMYIgVCtVykkJ6y0P3/ZF7r7/79x69z/JN2ZIQ0sLPrGIGBDfXyKlgg0EVy1Trbg0Srj64pOYNG44H7/4F+QyGaLIYGtHdVK/B6H/QU8gQQIeKsWYQm0esfckrr/qLI487fts7imQC6OUBhUDQEWV0+PNnJ90UFT6hzoQ/98/KkwZxMDBnwlo/3cUv9V66q8HQ8IKeFWcKrF3ALxe7lz6tXWv99cEAoiAiOCSmEnjx7HvnlModHfykWP3ZPaMKVxwyt5UbMjqtb28vOAdxICR/hsTwIpQrXrymZAjjppB4MrsM3NsTYuM4vyP7Mf8xWuJNcvf571FpVytM1/qE4wxgEfx7LfPNMYNz5ELhAP23BGfFOgplci1DOP5V99h3YYOIjF4+n0FIwICSVxl6sTxzJoxlmJnJ8cfvjvDh7Vy9sl7Y3N5Fi/t4PX/WoYxdkBmToR6LkNoaW7g2MOm4YrdHH3QdHafOopP1bCCZe3dFErK3JqjGDuHEIAYtFTCd2xAjelnCrJ9x2HbArDNBJAOFJJtJoG07+jROmKJCJoUt/XfxilGDIXuHvacNpJPn/ZxjAhVlJ9d/QlenL+Ur9TQQbz08w1ABFVP7BPUGaqFCq1Zx5VfPp0RLY14Ei694ATWb+7ia9fdQ7UUI+kaENFBT9pIvBIXe7jw4x9gr10mAY4jD3gfB8+ZxU2/eZSnn+lGNMRZD8qgYTAUurs4dPYBnHb8HAAcyu3fv4DH577BN6+7HxnMGBTFCYgPqPQUGdNm+drln6All0FJuPJLH+GdtZv4yjV/SBFIsQEIfRpQwjA9Drwn+bcygtt/PUiaBgmCqEcA6StZt9sSAEFMyOZiic9d8Xs2bu7k21/4EBHCvPmLOOYTP6XkPPlsI04HlKfivQd1iBEcQU1dv8DiZet55NdfTpMvvaUqH/zUDemj3ppamkAGgxIg6YxswEuvruaEc66vpXAvZY+aDQe4/Pq7anDs4zS3DMUECnjADBaAIEpr+86+5Fd0dxW48PQjsQiPPPMvPvL5X2ACSxim0QqDJcgjFqre1K71JCtWbeIPP/0sQsDaTV2ceO73eWdlN41NjagIiu/DCAQQBepHlf8eM1D03WeA0G3kgrbdcyx9n3oYeNyWAAA4JDBEtoFdJ09IW8KW1ubMXaYysqmVld29eBJQ25dj9l4RESAAYgSIbMjkHUZSrSoPPPIcxx65D1N2GMq/3to0QCtu7TCpgKJIFDFyeMi4ccP5y1MvM2PaDkyfOo5cEGKNRamCWhiEyglKkjK5OWpi+pTxLKip+86uIlMnjWdYvpktPkZNDN5uAyZNQIKUhh2njEkfYfP03Nc5+rDZ7DC2jWXrKnik3/SKQdQMZIX8J1uG9H/4XzfK9mEr4wNcYhg/uYHVxWItvPpx2ld3011Ps8v7xqSevbgIATRlvgf6xR4MXpV8LmDMxLGcdvGtnPqF2zjvqzcxadIOZMLgXUGmPnHMmrlzra7gIT782Z/V7uGnbKl4Ro8egnMeMNs8j/EhSQKTd27l1ZVrOf68n3LyBTdz79OvMH3WqNQjNikN2yqlMqgqLa05Goa01a5/C6d+/pdcfPWv2Xn6jliR/zzsq8p/fgz2AcCUMTSzpcfzrevuI04E29DA9T9/ipYhWbJhC0i53igxWKIEARQbRfzijkfZ0pvQPHIEDz79Dm3zNhBFEU4d2xvZXMjTzy1hS1cX2ZahLFnXzbU33IuNMhgryDYLbD1ITGDyrG0vctV1D+A0QMIs1/zkrzS1ZskETaiU++DRQUMNIgrG8uNbHqC7DE0jhvO7P7/OkMaWtLvY4//3AEH9Q/AiiEC5VEW9JWctEY4ozFLorYAqTsEPklAFVUwdw0+8p1RNGywRZ1KGFpIeHI53NQR6Kl2EOcGoJRtmUkaWEw+iiG5bA3gjiECpWMVIRDaAjPFEQYZSoQL1GnndBm5uEKh3SVcSSy7MIs6SzQX0Jl148f+7oGCfeMrVBNCUWcaUEGNQgSqCAGoSRAHXi4qCCILfqtBRsRi8KABoCCRYKYMKXgKQBHQrjSHbMFtqMApIDx4LBOASIMF4i4qi6OBdLB6jRZR6nWECaD8NQjFlImoGX1YU8QZv+tvNRRKEEqjBmwCIQQUEUCiLSXELLVXwGN7dUFT//ZpA3U5NYL0kDA9470FAfTxQAMYMyTFyQjOKYm2QTqxFMCDa37boAfWI/J/2rqXHjqMKf1913cdMZmzZCBFACZHlsZAXLBKBN0hmg4TY8Nh4B0JZGfwn2HjFyn8gCkKy2bBhwQJCJCtCMpZx5IAgoCTO08YZx3Yymce9t/swOepSq6t6ulxcYjJ36kjlvt11quqOv6+r+1adR40QQ4fHBlS3AyWgAwkMHR1Y6wfCMBB+p570pNNnfFUtfUfNnTdJowA8MXsSpjyMQgj6azrtnBEqFOn9BhIQoFUZBomSvQlAEZj6V5qicv8OcONmQ4Cf/vjbePYnz2ono9FIAzxbW4BkYnp7eoBIjwEb0+NohXV+u57xon0m/A2hE0dhDAp+iq+FMp97uFsKBojpn14CfvBiQ4DhyGJ5ddQiQGHsgmR+z8Kqgkw1wwlIwoxG3juABvYSJUBRSu2XJyDRKVkYTFyU1uXPXPJIV0hAKm8hiI2Rsx5dyfgnJHMgP6P2gAK2CkHPJGxuqLPsgxBxfgkXgtipvNiSxfjwL75kYRcBwEUnQRZSSxAhRK2A7NIYIgI7GsHCLAgZspCEtRZiC8jAgKCmj20R4N4/XsM7f3wJlWiqNU2aWFiryiqMve7wUbwHZZHuE+nRFWhMJI3JOJnOQALv33ilTYDbz/8Gr/72MkSIAQwsCeUK2fqJo+ddpCCD4AfiVEj0SWvddMEltAdM2xKWeIyAWoctszCBprzDTDEUvD3ZaBNgVBArI6POIEMShRJAC0AHIj2w6XADyb7pIU4CUHUOkDwk+PT0GWQKDZNEMcwbWLvwT+t8R0ti2gQQQ0BjyKIOi0ZnnQvQB5FxYNn1WGDiKyoXD21J0JeecwHoge+h3iIKnX9nRdVBwY7k0ba2pTANXgIByW48+jCWLn0ByPluEXIfYC3/4/b+3lQ0X1QQKcRhStZl5lsEGUDt7Okpeze+B2SANBkDXOa8u+XgPRNEglN6bQI9CY8EYBy+xiMACRgLSCWqZGplVxcAGp35/TbdQObdpsQ4QRLjT0gEwkWPrXM06M3eYRNYp+xvijgwBSRjs0ACCfpYT/90/4tELiSAL3j4u78JHu3w1ALTOwOUABlO/6QPShwgBkAzDigEi8iAdHWJPDi9ykikOOOONQGMT4ByuoNysqkeOaRxZpEgGd7V7lrIjIQ7mEF9XtyRhBlEWnkL2HwOieBCxoum14KhaFykFgEee/prOPqtZzTEqkbrNLsFppkKOoGlN72HZlWM3PUJnq6RdlFJNBeTqMlaI0wwZ4v9faGqhBe7fQo7rbQb1/qyKtU72xjg8JtvAf96qyHAF7//Xaz97KxmyhwOxxoC1mCBJIuCP51OUBjg9uXLwPO/bnYDpSw1tGqpZYqqnEGwCJJF6gih1Se4ziZapJx1O4bQZZlwqVGCdwxX4iKpv16AvvHCuoiO9zmQsE3695TuPuPt513VSOlLxJXOt0kD38Sfi7zckoVautYBDICy3yCMiQM5YaLfanq79PHnH2/+9sQ8kt4X9yIAG+tRPbrP+1+ykIolSC01AyR4BziggOdHgPFriUWXTADQewSY4VCDORczQWHHMFgcyUIN0C3FAIUdwBigGI7bBLh/5QruHl/GZAo1ICxYuAhe3tSQHS32xTa2tMespFS7wLKawhbEg7+92ibAgxf+gHvmGqYzwMDACEAQhtwbDDLdYIPRRdRo4mVGFmbRtyib4jecsBAc2bSJLAQnm4olpZeptKqOD0DRrOob61veI2A0xGBlSfMP6t1fg08BhPQAYYczZAi80ANLQjQIz29eXPcEWtc8J8zOdu3dZ2n0nW4zaNDO0wv63Hs8Sthnd3wAce1b46EKWN19DEEP+qJHBIGg0Lp6P0BT4QDFpu8cSpKWYKXjOXtA0GHl/k242+nHAeNBXwdg9/cyyTuEYXw1kaB3qfd0xWmLEhCKs28TuMNy21gBSlE6aTOa0NSDCRCRj+L5l62GIB2n4tVUdR8CWtGzhgCA/HW29SYMQM3GRVTKngokIX1GHR5FeuoikiUN4Dj4TsRFWtdKgR0Ab9wvbwIoHQEGf7798d+vvLv93jefGn1pY6dynuQte316tnxRKx6m3v3MTgFR9Yj9YKDugIcexwPgg02Z/eqVuy8CqFw8y8cBfnXt8yvf+8V3Hv/R158YHxUQ9J8z5H8HHtNAziIRnqSTQSAwBF5bn2z9/IX3f/f71z+8iGp6FcC7BHCoKIpjlbHfOGT59A9PHn7m1JNLX14a0QQTOenBmLqEyOil7B0kc9kNQsL2s5ngn3emd3/58gd/ubUxe3lpZK9vbW3dAHDXAtgi+e/HRoObGzuT5eeurX/03DWsALAO2TAIl7Mc7QGZ83tzZBGJPgLEqUlTzYARJYBNY82d5fHgdWPM2wA2nCrHu7K0tPSF7e3tp0TkKyLyOREZu70Cklq6hCpEXNDbx8GDVmSP6w/bvrcPkRZrJsaYewDeGQwGb6ysrLx369atj52zGI4dO8bjx4+Pr169ujqZTI4COCQiI5F2KM2iKOjI0DW2MSZGiqDdAcF+7v+LqqqkPsITh4eLCNbiBUkhORWRj6y1906cOPFgbW1t6+LFi6WbAXD69GlcuHDBXLp0yVy/ft2ur68PyrK0xhh2DVYUBYbDIRXwHjHGqK6IOALRnWcJQSzL8pMiaM4VcAfwXiTa2dmRXV2nExCn3JUjR47MdsGfnjlzplxdXZVTp06pMs+dO4eTJ0/y7NmzCvbm5qbsPgq0M5LsA7euZozhYZv8O7Anpl/KDClhm1DBBQBdXl7WG3B3+sf58+e1EWuQGAcA/L9t5WWRT0FfCWATO2WifibDo99DlhQdGwUr3jn3r193nhlsj5IDdoE9OvOsYOONwHkGSyZHFnkEfYUESCXCYoT4yCSyB/ulLs8cdt7B9jcp8mPCxjpduBkigx6fAQ7Osz7LfwDXCX0t4F+nsgAAAABJRU5ErkJggg=="
                  />
                </svg>
                <span>
                  EN
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.321"
                    height="7.368"
                    viewBox="0 0 7.321 4.368"
                  >
                    <path
                      id="Path_610"
                      data-name="Path 610"
                      d="M-3638,4744l3.307,3.307,3.307-3.307"
                      transform="translate(3638.354 -4743.646)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  </svg>
                </span>
              </div>
              <div className="header_loginBtns d-flex">
                <Button
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="btn btn-primary btn-light"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    router.push("/register");
                  }}
                  className="btn btn-primary"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="sectionBG">
          {/* <img src="./img/Mask Group 6.svg" /> */}
          <HomeSvg2 />
        </div>

        <div className="firsSection_text">
          <h2>
            Discover amazing things everywhere <br />
            and earn tokens
          </h2>
          <h3>From cozy country homes to funky city apartments</h3>
        </div>

        <Search />
        <div className="marketSumContainer">
          <div className="marketSumContainer_container">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56.863"
                viewBox="0 0 56 56.863"
              >
                <g
                  id="coinmarketcap-vector-logo"
                  transform="translate(-20.2 -269.9)"
                >
                  <path
                    id="Path_1238"
                    data-name="Path 1238"
                    d="M68.908,303.9a3.019,3.019,0,0,1-3.03.22c-1.1-.661-1.763-2.149-1.763-4.188V293.7c0-2.975-1.157-5.124-3.141-5.675-3.361-.992-5.9,3.141-6.832,4.684l-5.951,9.532V290.507c-.055-2.7-.937-4.3-2.59-4.794-1.1-.331-2.755-.165-4.353,2.259L27.969,309.241a23.508,23.508,0,0,1-2.7-10.91,22.924,22.924,0,1,1,45.843,0v.11c.11,2.48-.661,4.463-2.2,5.455Zm7.273-5.565h0v-.11C76.126,282.628,63.563,269.9,48.191,269.9A28.233,28.233,0,0,0,20.2,298.331c0,15.648,12.563,28.431,27.991,28.431a27.5,27.5,0,0,0,19.009-7.6,2.574,2.574,0,0,0-3.471-3.8l-.055.055a22.643,22.643,0,0,1-32.619-1.488L43.011,294.75v8.871c0,4.243,1.653,5.62,3.03,6.006s3.471.11,5.73-3.471l6.557-10.634a6.1,6.1,0,0,1,.606-.882v5.4c0,3.967,1.6,7.163,4.353,8.706a8.007,8.007,0,0,0,8.21-.331C74.694,306.321,76.4,302.684,76.181,298.331Z"
                    transform="translate(0 0)"
                    fill="#032087"
                  />
                </g>
              </svg>
            </div>
            <div className="sum">
              <h4>Market Cap</h4>
              <div>
                23,433,342,23$
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.183"
                    height="5.061"
                    viewBox="0 0 6.183 5.061"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropright"
                      data-name="Icon ionic-md-arrow-dropright"
                      d="M0,0,5.061,3.091,0,6.183Z"
                      transform="translate(0 5.061) rotate(-90)"
                      fill="#3acc89"
                    />
                  </svg>
                  2.54%
                </span>
              </div>
            </div>
            <div className="sum">
              <h4>BitBook Token</h4>
              <div>
                23,433,342,23$
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6.183"
                    height="5.061"
                    viewBox="0 0 6.183 5.061"
                  >
                    <path
                      id="Icon_ionic-md-arrow-dropright"
                      data-name="Icon ionic-md-arrow-dropright"
                      d="M0,0,5.061,3.091,0,6.183Z"
                      transform="translate(0 5.061) rotate(-90)"
                      fill="#3acc89"
                    />
                  </svg>
                  2.54%
                </span>
              </div>
            </div>
            <Button className="btn btn-primary">Trade Now</Button>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.855"
                height="49.018"
                viewBox="0 0 45.855 49.018"
              >
                <g id="commission" transform="translate(-3 -1)">
                  <path
                    id="Path_1214"
                    data-name="Path 1214"
                    d="M25.137,15.7A8.7,8.7,0,1,0,9.565,21a2.352,2.352,0,0,0-.24,1.019V26.8A5.11,5.11,0,0,0,5,24.393a2,2,0,0,0-1.667,3.116l.814,1.22a3.534,3.534,0,0,1,.563,1.515l.561,4.482a3.941,3.941,0,0,0,.761,1.882l1.709,2.28v1.318H6.162V51.274H23.556V40.206H21.975V38.811l1.165-2.328a3.984,3.984,0,0,0,.417-1.767V22.022A2.363,2.363,0,0,0,23.316,21,8.643,8.643,0,0,0,25.137,15.7Zm-8.7-7.116A7.116,7.116,0,1,1,9.325,15.7,7.124,7.124,0,0,1,16.44,8.581Zm5.534,33.206v1.581H7.744V41.787ZM7.744,49.693V44.949H21.975v4.744ZM21.725,35.776l-1.331,2.662v1.768H9.325V38.361L7.3,35.66a2.367,2.367,0,0,1-.456-1.128l-.561-4.482a5.117,5.117,0,0,0-.816-2.2l-.814-1.221A.423.423,0,0,1,5,25.975,3.526,3.526,0,0,1,8.451,28.8l.987,4.935.485.122a3.38,3.38,0,0,1,2.564,3.283v1.484h1.581V37.14a4.952,4.952,0,0,0-3.162-4.619V22.4a8.707,8.707,0,0,0,1.581,1.033v8.075h1.581V24.057a8.688,8.688,0,0,0,1.581.3v7.155h1.581V24.353a8.556,8.556,0,0,0,1.581-.3v7.453h1.581V23.434A8.707,8.707,0,0,0,21.975,22.4V34.716A2.383,2.383,0,0,1,21.725,35.776Z"
                    transform="translate(0 -1.256)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1215"
                    data-name="Path 1215"
                    d="M19.372,18.906a.791.791,0,0,1-.791-.791H17a2.369,2.369,0,0,0,1.581,2.226v1.727h1.581V20.487h1.581V18.116a2.375,2.375,0,0,0-2.372-2.372.791.791,0,0,1-.791-.791v-.791h.791a.791.791,0,0,1,.791.791h1.581a2.369,2.369,0,0,0-1.581-2.226V11H18.581v1.581H17v2.372a2.375,2.375,0,0,0,2.372,2.372.791.791,0,0,1,.791.791v.791Z"
                    transform="translate(-2.931 -2.094)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1216"
                    data-name="Path 1216"
                    d="M54.382,24.765l-.814-1.22a3.534,3.534,0,0,1-.563-1.515l-.561-4.482a3.941,3.941,0,0,0-.761-1.882l-1.709-2.28V12.069h1.581V1H34.162V12.069h1.581v1.395l-1.165,2.328a3.984,3.984,0,0,0-.417,1.767V30.253a2.374,2.374,0,0,0,.047.463,10.278,10.278,0,1,0,14.136,0,2.374,2.374,0,0,0,.047-.463V25.475a5.11,5.11,0,0,0,4.321,2.406,2,2,0,0,0,1.667-3.116ZM49.975,2.581v7.906H35.744V7.325h6.325V5.744H35.744V2.581Zm0,35.578a8.7,8.7,0,1,1-8.7-8.7A8.707,8.707,0,0,1,49.975,38.159ZM52.714,26.3a3.526,3.526,0,0,1-3.447-2.826l-.987-4.935-.485-.122a3.38,3.38,0,0,1-2.564-3.283V13.65H43.65v1.484a4.952,4.952,0,0,0,3.162,4.619v9.759a10.2,10.2,0,0,0-1.581-.838V20.765H43.65v7.4a10.312,10.312,0,0,0-1.581-.247V20.765H40.487v7.156a10.122,10.122,0,0,0-1.581.247v-7.4H37.325v7.908a10.273,10.273,0,0,0-1.581.838V17.559a2.389,2.389,0,0,1,.25-1.061l1.331-2.661V12.069H48.393v1.844l2.026,2.7a2.367,2.367,0,0,1,.456,1.128l.561,4.482a5.117,5.117,0,0,0,.816,2.2l.814,1.22a.424.424,0,0,1-.351.659Z"
                    transform="translate(-5.863 0)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1217"
                    data-name="Path 1217"
                    d="M0,0H13.417V1.581H0Z"
                    transform="translate(30.105 42.343) rotate(-45)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1218"
                    data-name="Path 1218"
                    d="M47.372,49a2.372,2.372,0,1,0,2.372,2.372A2.375,2.375,0,0,0,47.372,49Zm0,3.162a.791.791,0,1,1,.791-.791A.791.791,0,0,1,47.372,52.162Z"
                    transform="translate(-8.794 -10.051)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1219"
                    data-name="Path 1219"
                    d="M39.372,45.744A2.372,2.372,0,1,0,37,43.372,2.375,2.375,0,0,0,39.372,45.744Zm0-3.162a.791.791,0,1,1-.791.791A.791.791,0,0,1,39.372,42.581Z"
                    transform="translate(-7.119 -8.376)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1220"
                    data-name="Path 1220"
                    d="M49.372,9.744A2.372,2.372,0,1,0,47,7.372,2.375,2.375,0,0,0,49.372,9.744Zm0-3.162a.791.791,0,1,1-.791.791A.791.791,0,0,1,49.372,6.581Z"
                    transform="translate(-9.213 -0.838)"
                    fill="#032087"
                  />
                </g>
              </svg>
              <h4>Commission model</h4>
              <p>for every booking made on the BitBook platform.</p>
            </div>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="49.021"
                height="49.018"
                viewBox="0 0 49.021 49.018"
              >
                <g id="affiliate" transform="translate(0.001 -0.105)">
                  <path
                    id="Path_1221"
                    data-name="Path 1221"
                    d="M203.945,204.782h-1.531a.766.766,0,0,1,0-1.531h3.063v-1.531h-1.531v-1.531h-1.531v1.531a2.3,2.3,0,0,0,0,4.594h1.531a.766.766,0,1,1,0,1.531h-3.063v1.531h1.531v1.531h1.531v-1.531a2.3,2.3,0,1,0,0-4.594Zm0,0"
                    transform="translate(-180.965 -180.934)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1222"
                    data-name="Path 1222"
                    d="M174.216,127.157l1.214-1.214,1.214,1.214h1.848V110.313h-2.3v-1.531a4.585,4.585,0,0,0-6.891-3.972,4.585,4.585,0,0,0-6.891,3.972v1.531h-2.3v16.844Zm1.98-15.313h.766v13.465l-1.531-1.531-1.531,1.531V111.844Zm-7.656-3.063a3.035,3.035,0,0,1,.766-2,3.039,3.039,0,0,1,.766,2v1.531H168.54Zm-4.594,0a3.062,3.062,0,0,1,3.063-3.063,3.016,3.016,0,0,1,1.017.187,4.571,4.571,0,0,0-1.017,2.876v1.531h-3.063Zm8.422,16.844H161.649V111.844h10.719Zm-.766-15.313v-1.531a4.569,4.569,0,0,0-1.017-2.876,3.016,3.016,0,0,1,1.017-.187,3.062,3.062,0,0,1,3.063,3.063v1.531Zm0,0"
                    transform="translate(-144.794 -94.121)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1223"
                    data-name="Path 1223"
                    d="M47.481,24.614a22.726,22.726,0,0,1-1.958,9.264,8.49,8.49,0,0,0-1.331-.79,21.327,21.327,0,0,0,0-16.954A8.413,8.413,0,1,0,34.835,2.4,24.244,24.244,0,0,0,24.511.113V1.644A22.72,22.72,0,0,1,33.776,3.6a8.421,8.421,0,0,0-.787,1.334,21.327,21.327,0,0,0-16.954,0A8.413,8.413,0,1,0,2.3,14.29,24.243,24.243,0,0,0,.011,24.614H1.542A22.724,22.724,0,0,1,3.5,15.349a8.411,8.411,0,0,0,1.335.787,21.327,21.327,0,0,0,0,16.954,8.414,8.414,0,1,0,9.354,13.733,24.24,24.24,0,0,0,10.323,2.29V47.583a22.725,22.725,0,0,1-9.264-1.958,8.441,8.441,0,0,0,.789-1.331,21.327,21.327,0,0,0,16.954,0,8.413,8.413,0,1,0,13.731-9.357,24.245,24.245,0,0,0,2.29-10.324ZM40.59,1.644a6.881,6.881,0,0,1,4.594,12.012V10.441L43.332,9.108a3.032,3.032,0,0,0,.321-1.338,3.063,3.063,0,1,0-6.125,0,3.024,3.024,0,0,0,.321,1.338L36,10.44v3.216A6.881,6.881,0,0,1,40.59,1.644Zm0,9.188a3.037,3.037,0,0,0,1.748-.554l1.315.946V14.66h.077a6.831,6.831,0,0,1-6.278,0h.077V11.224l1.314-.946a3.039,3.039,0,0,0,1.748.554ZM39.059,7.77A1.531,1.531,0,1,1,40.59,9.3,1.531,1.531,0,0,1,39.059,7.77ZM3.839,10.44v3.216a6.891,6.891,0,1,1,9.188,0V10.44L11.175,9.107a3.063,3.063,0,1,0-5.484,0Zm4.594.392a3.037,3.037,0,0,0,1.748-.554l1.315.946V14.66h.077a6.831,6.831,0,0,1-6.278,0H5.37V11.224l1.314-.946a3.04,3.04,0,0,0,1.748.554ZM6.9,7.77A1.531,1.531,0,1,1,8.433,9.3,1.531,1.531,0,0,1,6.9,7.77ZM8.433,47.583a6.835,6.835,0,0,1-3.139-.766H5.37V43.382l1.314-.947a3.033,3.033,0,0,0,3.5,0l1.315.947v3.436h.077a6.838,6.838,0,0,1-3.139.766ZM6.9,39.927a1.531,1.531,0,1,1,1.531,1.531A1.531,1.531,0,0,1,6.9,39.927Zm6.125,5.887V42.6l-1.852-1.332a3.029,3.029,0,0,0,.321-1.339,3.063,3.063,0,1,0-6.125,0,3.024,3.024,0,0,0,.321,1.338L3.839,42.6v3.216a6.891,6.891,0,1,1,9.188,0ZM32.2,41.3a8.323,8.323,0,0,0,.261,1.557,19.792,19.792,0,0,1-15.9,0,8.378,8.378,0,0,0-7-10.5,16.823,16.823,0,0,1-1.9-7.741H6.136A18.379,18.379,0,0,0,7.828,32.3a8.335,8.335,0,0,0-1.558.261,19.8,19.8,0,0,1,0-15.9,8.379,8.379,0,0,0,10.5-7,16.837,16.837,0,0,1,7.742-1.9V6.238A18.377,18.377,0,0,0,16.824,7.93a8.366,8.366,0,0,0-.261-1.558,19.8,19.8,0,0,1,15.9,0,8.379,8.379,0,0,0,7,10.5,16.841,16.841,0,0,1,1.9,7.742h1.531a18.389,18.389,0,0,0-1.692-7.687,8.392,8.392,0,0,0,1.558-.261,19.8,19.8,0,0,1,0,15.9,8.38,8.38,0,0,0-10.5,7,16.835,16.835,0,0,1-7.741,1.9v1.531A18.379,18.379,0,0,0,32.2,41.3Zm8.391,6.287a6.835,6.835,0,0,1-3.139-.766h.077V43.382l1.314-.947a3.033,3.033,0,0,0,3.5,0l1.315.947v3.436h.077A6.838,6.838,0,0,1,40.59,47.583Zm-1.531-7.656a1.531,1.531,0,1,1,1.531,1.531A1.531,1.531,0,0,1,39.058,39.927Zm8.422.766a6.87,6.87,0,0,1-2.3,5.121V42.6l-1.852-1.332a3.029,3.029,0,0,0,.321-1.339,3.063,3.063,0,0,0-6.125,0,3.024,3.024,0,0,0,.321,1.338L36,42.6v3.216a6.886,6.886,0,1,1,11.485-5.12Zm0,0"
                    transform="translate(0 0)"
                    fill="#032087"
                  />
                </g>
              </svg>

              <h4>Affiliate Marketing</h4>
              <p>
                to sell third party products (Insurance, flights, car hire etc)
              </p>
            </div>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40.219"
                height="51.6"
                viewBox="0 0 40.219 51.6"
              >
                <g id="ad" transform="translate(-64.251 -9.984)">
                  <path
                    id="Path_1224"
                    data-name="Path 1224"
                    d="M66.116,348.571a.629.629,0,0,0,.625.553h8.374a.629.629,0,0,0,.6-.813l-1.076-3.53,3.353-2.12a1.954,1.954,0,0,1,1.422-.183l.039.008,6.97,1.283a9.13,9.13,0,0,0,5.641-.8.632.632,0,0,0,.077-.045l12.055-8.277a.629.629,0,0,0,.183-.843,3.418,3.418,0,0,0-4.558-1.246l-.127.069a2.936,2.936,0,0,0-3.439-.8l-.014.007-.42.226a3.794,3.794,0,0,0-4.284-.346l-2.586,1.406H85.5a4.912,4.912,0,0,1-2.126-.487l-.478-.231a8.312,8.312,0,0,0-8.65.845c-.014.01-.027.021-.04.033l-1.154,1.028a3.9,3.9,0,0,1-1.365.788l-.624-2.047a.629.629,0,0,0-.6-.446H64.88a.629.629,0,0,0-.625.705ZM96.83,332.949a1.62,1.62,0,0,1,1.7.31L94.1,335.65l-.158.084a4.075,4.075,0,0,0-.52-.947Zm-4.685-.13.015-.008a2.533,2.533,0,0,1,2.4-.07l-2.087,1.124a4.058,4.058,0,0,0-1.2-.577Zm-18.254,2.432,1.135-1.01a7.058,7.058,0,0,1,7.325-.7l.479.232a6.177,6.177,0,0,0,2.674.613h4.636a2.823,2.823,0,0,1,2.739,2.156l-3.218-.146a20.224,20.224,0,0,0-3.677.17.629.629,0,1,0,.172,1.247,18.963,18.963,0,0,1,3.448-.159l3.955.179h.029a.629.629,0,0,0,.629-.629c0-.063,0-.125,0-.186l.481-.254,5.729-3.091a2.161,2.161,0,0,1,2.51.326l-11.462,7.87a7.864,7.864,0,0,1-4.817.667L79.7,341.253a3.208,3.208,0,0,0-2.336.318l-.029.017-3.076,1.945-2.2-7.23A5.155,5.155,0,0,0,73.891,335.251ZM70,333.865l4.268,14H67.3l-1.707-14Z"
                    transform="translate(0 -287.54)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1225"
                    data-name="Path 1225"
                    d="M108.835,457.388a1.746,1.746,0,1,0-1.746-1.746A1.746,1.746,0,0,0,108.835,457.388Zm0-2.233a.487.487,0,1,1-.487.487.487.487,0,0,1,.487-.487Z"
                    transform="translate(-38.346 -397.357)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1226"
                    data-name="Path 1226"
                    d="M201.4,130.5c.294,0,.394-.137.427-.253l.24-.884h1.477l.241.885c.033.115.133.252.427.252.322,0,.791-.2.791-.524a.426.426,0,0,0-.017-.1l-1.381-4.5a.977.977,0,0,0-1.606,0l-1.374,4.506a.414.414,0,0,0-.016.094C200.614,130.3,201.082,130.5,201.4,130.5Zm.932-2.127.47-1.726.47,1.726Z"
                    transform="translate(-122.062 -102.915)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1227"
                    data-name="Path 1227"
                    d="M246.148,130.88h1.307a1.653,1.653,0,0,0,1.868-1.794v-1.912a1.653,1.653,0,0,0-1.868-1.795h-1.307c-.316,0-.554.172-.554.4v4.7C245.594,130.709,245.832,130.88,246.148,130.88Zm1.919-1.794c0,.455-.206.686-.612.686h-.6v-3.283h.6c.406,0,.612.231.612.686Z"
                    transform="translate(-162.325 -103.293)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1228"
                    data-name="Path 1228"
                    d="M175.7,96.392a7.806,7.806,0,1,0-7.806-7.806,7.806,7.806,0,0,0,7.806,7.806Zm0-14.354a6.548,6.548,0,1,1-6.548,6.548A6.548,6.548,0,0,1,175.7,82.038Z"
                    transform="translate(-92.774 -63.371)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1229"
                    data-name="Path 1229"
                    d="M230.892,252.864a.629.629,0,0,0-.629.629v3.963a1.741,1.741,0,1,0,1.258,0v-3.963A.629.629,0,0,0,230.892,252.864Zm0,6.7a.482.482,0,1,1,.482-.482A.482.482,0,0,1,230.892,259.56Z"
                    transform="translate(-147.607 -217.408)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1230"
                    data-name="Path 1230"
                    d="M230.263,13.348v1.74a.629.629,0,1,0,1.258,0v-1.74a1.741,1.741,0,1,0-1.258,0Zm.629-2.1a.482.482,0,1,1-.482.482A.482.482,0,0,1,230.892,11.244Z"
                    transform="translate(-147.607)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1231"
                    data-name="Path 1231"
                    d="M333.421,143.267a.629.629,0,0,0,0,1.258h3.963a1.741,1.741,0,1,0,0-1.258Zm5.585.147a.482.482,0,1,1-.482.482A.482.482,0,0,1,339.006,143.414Z"
                    transform="translate(-240.378 -118.31)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1232"
                    data-name="Path 1232"
                    d="M105.095,145.648a1.742,1.742,0,0,0,1.622-1.112h1.74a.629.629,0,0,0,0-1.258h-1.74a1.74,1.74,0,1,0-1.622,2.37Zm0-2.223a.482.482,0,1,1-.482.482.482.482,0,0,1,.482-.482Z"
                    transform="translate(-35.002 -118.321)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1233"
                    data-name="Path 1233"
                    d="M109.616,21.2a1.736,1.736,0,0,0,.7-.149l4.284,4.284a.629.629,0,1,0,.89-.89l-4.285-4.285a1.739,1.739,0,1,0-1.591,1.039Zm-.341-2.082a.482.482,0,1,1,0,.682h0A.483.483,0,0,1,109.275,19.122Z"
                    transform="translate(-39.05 -6.93)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1234"
                    data-name="Path 1234"
                    d="M324.6,223.462a1.741,1.741,0,1,0,.53-2.822l-1.23-1.23a.629.629,0,0,0-.89.89l1.229,1.229A1.738,1.738,0,0,0,324.6,223.462Zm1.572-1.572a.483.483,0,1,1-.341-.141.483.483,0,0,1,.341.141Z"
                    transform="translate(-231.459 -187.297)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1235"
                    data-name="Path 1235"
                    d="M121.085,225.619a.629.629,0,0,0-.89,0l-2.8,2.8a1.74,1.74,0,1,0,.529,2.824h0a1.742,1.742,0,0,0,.36-1.933l2.8-2.8A.629.629,0,0,0,121.085,225.619Zm-4.053,4.735a.482.482,0,1,1,0-.682.482.482,0,0,1,0,.682Z"
                    transform="translate(-45.384 -192.855)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1236"
                    data-name="Path 1236"
                    d="M317.1,57.771a.628.628,0,0,0,.445-.184l1.229-1.229a1.741,1.741,0,1,0-.529-2.824h0a1.742,1.742,0,0,0-.361,1.933l-1.23,1.23a.629.629,0,0,0,.445,1.074Zm2.035-3.347a.482.482,0,1,1,0,.682A.482.482,0,0,1,319.132,54.424Z"
                    transform="translate(-225.765 -38.525)"
                    fill="#032087"
                  />
                </g>
              </svg>

              <h4>Advertisment</h4>
              <p>
                to enable our partners to offer relevant products and services.
              </p>
            </div>
            <div className="col-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45.855"
                height="49.018"
                viewBox="0 0 45.855 49.018"
              >
                <g id="commission" transform="translate(-3 -1)">
                  <path
                    id="Path_1214"
                    data-name="Path 1214"
                    d="M25.137,15.7A8.7,8.7,0,1,0,9.565,21a2.352,2.352,0,0,0-.24,1.019V26.8A5.11,5.11,0,0,0,5,24.393a2,2,0,0,0-1.667,3.116l.814,1.22a3.534,3.534,0,0,1,.563,1.515l.561,4.482a3.941,3.941,0,0,0,.761,1.882l1.709,2.28v1.318H6.162V51.274H23.556V40.206H21.975V38.811l1.165-2.328a3.984,3.984,0,0,0,.417-1.767V22.022A2.363,2.363,0,0,0,23.316,21,8.643,8.643,0,0,0,25.137,15.7Zm-8.7-7.116A7.116,7.116,0,1,1,9.325,15.7,7.124,7.124,0,0,1,16.44,8.581Zm5.534,33.206v1.581H7.744V41.787ZM7.744,49.693V44.949H21.975v4.744ZM21.725,35.776l-1.331,2.662v1.768H9.325V38.361L7.3,35.66a2.367,2.367,0,0,1-.456-1.128l-.561-4.482a5.117,5.117,0,0,0-.816-2.2l-.814-1.221A.423.423,0,0,1,5,25.975,3.526,3.526,0,0,1,8.451,28.8l.987,4.935.485.122a3.38,3.38,0,0,1,2.564,3.283v1.484h1.581V37.14a4.952,4.952,0,0,0-3.162-4.619V22.4a8.707,8.707,0,0,0,1.581,1.033v8.075h1.581V24.057a8.688,8.688,0,0,0,1.581.3v7.155h1.581V24.353a8.556,8.556,0,0,0,1.581-.3v7.453h1.581V23.434A8.707,8.707,0,0,0,21.975,22.4V34.716A2.383,2.383,0,0,1,21.725,35.776Z"
                    transform="translate(0 -1.256)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1215"
                    data-name="Path 1215"
                    d="M19.372,18.906a.791.791,0,0,1-.791-.791H17a2.369,2.369,0,0,0,1.581,2.226v1.727h1.581V20.487h1.581V18.116a2.375,2.375,0,0,0-2.372-2.372.791.791,0,0,1-.791-.791v-.791h.791a.791.791,0,0,1,.791.791h1.581a2.369,2.369,0,0,0-1.581-2.226V11H18.581v1.581H17v2.372a2.375,2.375,0,0,0,2.372,2.372.791.791,0,0,1,.791.791v.791Z"
                    transform="translate(-2.931 -2.094)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1216"
                    data-name="Path 1216"
                    d="M54.382,24.765l-.814-1.22a3.534,3.534,0,0,1-.563-1.515l-.561-4.482a3.941,3.941,0,0,0-.761-1.882l-1.709-2.28V12.069h1.581V1H34.162V12.069h1.581v1.395l-1.165,2.328a3.984,3.984,0,0,0-.417,1.767V30.253a2.374,2.374,0,0,0,.047.463,10.278,10.278,0,1,0,14.136,0,2.374,2.374,0,0,0,.047-.463V25.475a5.11,5.11,0,0,0,4.321,2.406,2,2,0,0,0,1.667-3.116ZM49.975,2.581v7.906H35.744V7.325h6.325V5.744H35.744V2.581Zm0,35.578a8.7,8.7,0,1,1-8.7-8.7A8.707,8.707,0,0,1,49.975,38.159ZM52.714,26.3a3.526,3.526,0,0,1-3.447-2.826l-.987-4.935-.485-.122a3.38,3.38,0,0,1-2.564-3.283V13.65H43.65v1.484a4.952,4.952,0,0,0,3.162,4.619v9.759a10.2,10.2,0,0,0-1.581-.838V20.765H43.65v7.4a10.312,10.312,0,0,0-1.581-.247V20.765H40.487v7.156a10.122,10.122,0,0,0-1.581.247v-7.4H37.325v7.908a10.273,10.273,0,0,0-1.581.838V17.559a2.389,2.389,0,0,1,.25-1.061l1.331-2.661V12.069H48.393v1.844l2.026,2.7a2.367,2.367,0,0,1,.456,1.128l.561,4.482a5.117,5.117,0,0,0,.816,2.2l.814,1.22a.424.424,0,0,1-.351.659Z"
                    transform="translate(-5.863 0)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1217"
                    data-name="Path 1217"
                    d="M0,0H13.417V1.581H0Z"
                    transform="translate(30.105 42.343) rotate(-45)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1218"
                    data-name="Path 1218"
                    d="M47.372,49a2.372,2.372,0,1,0,2.372,2.372A2.375,2.375,0,0,0,47.372,49Zm0,3.162a.791.791,0,1,1,.791-.791A.791.791,0,0,1,47.372,52.162Z"
                    transform="translate(-8.794 -10.051)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1219"
                    data-name="Path 1219"
                    d="M39.372,45.744A2.372,2.372,0,1,0,37,43.372,2.375,2.375,0,0,0,39.372,45.744Zm0-3.162a.791.791,0,1,1-.791.791A.791.791,0,0,1,39.372,42.581Z"
                    transform="translate(-7.119 -8.376)"
                    fill="#032087"
                  />
                  <path
                    id="Path_1220"
                    data-name="Path 1220"
                    d="M49.372,9.744A2.372,2.372,0,1,0,47,7.372,2.375,2.375,0,0,0,49.372,9.744Zm0-3.162a.791.791,0,1,1-.791.791A.791.791,0,0,1,49.372,6.581Z"
                    transform="translate(-9.213 -0.838)"
                    fill="#032087"
                  />
                </g>
              </svg>

              <h4>Commission model</h4>
              <p>for every booking made on the BitBook platform.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sliderSection">
        <FullPageSlider />
      </section>

      <section className="articlesSlider">
        <div className="container">
          <h3>Articles</h3>
        </div>
        <ArticlesSlider />
      </section>
      <section className="topDestinations">
        <div className="container">
          <h4>Top destinations</h4>

          <div className="row">
            <div className="col-3">
              <ul className="topDestinations_menu">
                <li>
                  <Link href="#">
                    <a>Europe</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>NORTH AMERICA</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>ASIA</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> CENTRAL AMERICAN & CARIBBEAN</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a> PACIFIC OCEAN & AUSTRALIA</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>SOUTH AMERICA</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>AFRICA</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>MIDDLE EAST</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="topDestinations_item">
                <img src="./img/Rectangle 26.png" />
                <div className="blur"></div>
                <div className="blur blur-hover"></div>
                <div className="topDestinations_item_text">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                </div>

                <div className="topDestinations_item_text topDestinations_item_text-hover">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                  <div className="price">Starting price from 16$</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="topDestinations_item">
                <img src="./img/Rectangle 26.png" />
                <div className="blur"></div>
                <div className="blur blur-hover"></div>

                <div className="topDestinations_item_text">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                </div>
                <div className="topDestinations_item_text topDestinations_item_text-hover">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                  <div className="price">Starting price from 16$</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-3">
              <div className="topDestinations_item">
                <img src="./img/Rectangle 26.png" />
                <div className="blur"></div>
                <div className="blur blur-hover"></div>

                <div className="topDestinations_item_text">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                </div>
                <div className="topDestinations_item_text topDestinations_item_text-hover">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                  <div className="price">Starting price from 16$</div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="topDestinations_item">
                <img src="./img/Rectangle 26.png" />
                <div className="blur"></div>
                <div className="blur blur-hover"></div>

                <div className="topDestinations_item_text">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                </div>
                <div className="topDestinations_item_text topDestinations_item_text-hover">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                  <div className="price">Starting price from 16$</div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="topDestinations_item">
                <img src="./img/Rectangle 26.png" />
                <div className="blur"></div>
                <div className="blur blur-hover"></div>

                <div className="topDestinations_item_text">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                </div>
                <div className="topDestinations_item_text topDestinations_item_text-hover">
                  <h5>ROME</h5>
                  <h6>Italy</h6>
                  <div className="price">Starting price from 16$</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="subscribe">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="subscribe_test">
            <h6>Save time, save money!</h6>
            <p>Sign up and we`ll send the best deals to you</p>
          </div>
          <div className="subscribe_form d-flex align-items-center">
            <input placeholder="Enter your email" />
            <Button className="btn btn-primary">Sing Up</Button>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img className="pb-3" src="./img/Logo.svg" />
              <p className="mb-4 mt-2">
                Explore the world and earn passive rewards
              </p>
              <div className="footer_socials">
                <Link href="#">
                  <a>
                    <svg
                      id="Component_22_11"
                      data-name="Component 22 – 11"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <circle
                        id="Ellipse_7"
                        data-name="Ellipse 7"
                        cx="25"
                        cy="25"
                        r="25"
                        fill="#fff"
                        opacity="0.45"
                      />
                      <path
                        id="Icon_awesome-facebook-f"
                        data-name="Icon awesome-facebook-f"
                        d="M12.849,12.632l.624-4.064h-3.9V5.931a2.032,2.032,0,0,1,2.291-2.2h1.773V.275A21.62,21.62,0,0,0,10.49,0C7.279,0,5.179,1.947,5.179,5.47v3.1H1.609v4.064h3.57v9.825H9.573V12.632Z"
                        transform="translate(17.537 14.285)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <svg
                      id="Component_23_11"
                      data-name="Component 23 – 11"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <circle
                        id="Ellipse_10"
                        data-name="Ellipse 10"
                        cx="25"
                        cy="25"
                        r="25"
                        fill="#fff"
                        opacity="0.45"
                      />
                      <path
                        id="Icon_awesome-youtube"
                        data-name="Icon awesome-youtube"
                        d="M24.887,7.178a3.059,3.059,0,0,0-2.152-2.166c-1.9-.512-9.512-.512-9.512-.512s-7.613,0-9.512.512A3.059,3.059,0,0,0,1.559,7.178a32.09,32.09,0,0,0-.509,5.9,32.09,32.09,0,0,0,.509,5.9,3.013,3.013,0,0,0,2.152,2.132c1.9.512,9.512.512,9.512.512s7.613,0,9.512-.512a3.013,3.013,0,0,0,2.152-2.132,32.09,32.09,0,0,0,.509-5.9,32.09,32.09,0,0,0-.509-5.9ZM10.733,16.7V9.456l6.363,3.62L10.733,16.7Z"
                        transform="translate(11.634 11.941)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <svg
                      id="Component_24_12"
                      data-name="Component 24 – 12"
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <circle
                        id="Ellipse_8"
                        data-name="Ellipse 8"
                        cx="25"
                        cy="25"
                        r="25"
                        fill="#fff"
                        opacity="0.45"
                      />
                      <path
                        id="Icon_awesome-twitter"
                        data-name="Icon awesome-twitter"
                        d="M22.427,8.44c.016.222.016.444.016.666A14.476,14.476,0,0,1,7.867,23.683,14.477,14.477,0,0,1,0,21.383a10.6,10.6,0,0,0,1.237.063A10.26,10.26,0,0,0,7.6,19.257,5.132,5.132,0,0,1,2.807,15.7a6.46,6.46,0,0,0,.968.079,5.418,5.418,0,0,0,1.348-.174,5.124,5.124,0,0,1-4.108-5.028v-.063a5.159,5.159,0,0,0,2.316.65A5.131,5.131,0,0,1,1.745,4.317,14.562,14.562,0,0,0,12.308,9.677,5.783,5.783,0,0,1,12.181,8.5,5.128,5.128,0,0,1,21.047,5,10.086,10.086,0,0,0,24.3,3.761a5.109,5.109,0,0,1-2.252,2.823A10.27,10.27,0,0,0,25,5.792,11.012,11.012,0,0,1,22.427,8.44Z"
                        transform="translate(13.759 13.061)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <g id="Component_25_16" data-name="Component 25 – 16">
                        <circle
                          id="Ellipse_8"
                          data-name="Ellipse 8"
                          cx="25"
                          cy="25"
                          r="25"
                          fill="#fff"
                          opacity="0.45"
                        />
                      </g>
                      <path
                        id="Icon_awesome-telegram-plane"
                        data-name="Icon awesome-telegram-plane"
                        d="M23.665,6.34,20.084,23.229c-.27,1.192-.975,1.489-1.976.927l-5.457-4.021-2.633,2.532a1.37,1.37,0,0,1-1.1.535l.392-5.557L19.427,8.507c.44-.392-.1-.609-.683-.217l-12.5,7.872L.859,14.477c-1.171-.366-1.192-1.171.244-1.732L22.155,4.634c.975-.366,1.828.217,1.51,1.706Z"
                        transform="translate(10.918 11.413)"
                        fill="#fff"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4">
                  <label>Products</label>
                  <ul className="footer_menu">
                    <li>
                      <Link href="#">
                        <a>Hotels</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Car Rentals</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Flights</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Vacations</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <label>Customer Service</label>
                  <ul className="footer_menu">
                    <li>
                      <Link href="#">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Privacy Policy</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Terms & Conditions</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Lookup Reservation</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <label>Products</label>
                  <ul className="footer_menu">
                    <li>
                      <Link href="#">
                        <a>Hotels</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Car Rentals</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Flights</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Vacations</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
