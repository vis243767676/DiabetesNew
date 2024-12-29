import { FunctionComponent, useCallback } from "react";
import HBA1CLevelRange from "../components/HBA1CLevelRange";
import styles from "./Root.module.css";

const Root: FunctionComponent = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
          nextOuterSibling?.querySelector("[data-acc-item]") ||
          nextOuterSibling
        : accItem?.previousElementSibling ||
          prevOuterSibling?.querySelector("[data-acc-item]") ||
          prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openStyleObject = {
        "grid-template-rows": "1fr",
      };
      const closeStyleObject = {
        "padding-top": "0px",
        "padding-bottom": "0px",
        "margin-bottom": "0px",
        "margin-top": "0px",
        "grid-template-rows": "0fr",
      };

      function applyStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.assign(element.style, styleObject);
      }

      function removeStyles(
        element: HTMLElement,
        styleObject: Record<string, string>
      ) {
        Object.keys(styleObject).forEach((key) => {
          element?.style.removeProperty(key);
        });
      }

      if (isOpen) {
        removeStyles(accContent, openStyleObject);
        applyStyles(accContent, closeStyleObject);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          removeStyles(siblingAccContent, closeStyleObject);
          applyStyles(siblingAccContent, openStyleObject);
        }, 1);
      }
    },
    []
  );

  return (
    <div className={styles.root}>
      <HBA1CLevelRange />
      <div className={styles.factorsImpact} data-acc-group>
        <div className={styles.factorsExplanation}>
          <h3 className={styles.factorsAffectingHba1c}>
            Factors Affecting HbA1c Levels
          </h3>
          <div className={styles.basedOnYour}>
            Based on your assessment results
          </div>
        </div>
        <div
          className={styles.factorList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <a className={styles.weight}>
            <p className={styles.physical}>Weight</p>
          </a>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorValues}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <a className={styles.weight}>
            <p className={styles.physical}>Weight</p>
          </a>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div
          className={styles.factorList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.diet}>
            <p className={styles.physical}>Diet</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild11} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorValues}>
                <div className={styles.div1}>7/10</div>
                <img
                  className={styles.arrowChevronRightIcon2}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.averageHighContainer}>
                  <span>Average</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864-1.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alerttrianglefill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <a className={styles.weight}>
            <p className={styles.physical}>Weight</p>
          </a>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div
          className={styles.factorList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.diet}>
            <p className={styles.physical}>Physical</p>
            <p className={styles.physical}>Activity</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorValues}>
                <div className={styles.kcal}>600 kcal</div>
                <img
                  className={styles.arrowChevronRightIcon4}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Sedentary</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <a className={styles.weight}>
            <p className={styles.physical}>Weight</p>
          </a>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div
          className={styles.factorList}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.diet}>
            <p className={styles.physical}>Sleep</p>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild39} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorValues}>
                <div className={styles.h}>5 h</div>
                <img
                  className={styles.arrowChevronRightIcon6}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.goodLowContainer}>
                  <span>Good</span>
                  <span className={styles.highImpact}> | Low Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864-3.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertcheckcirclefill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <a className={styles.weight}>
            <p className={styles.physical}>Weight</p>
          </a>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div
          className={styles.factorList4}
          data-acc-item
          data-acc-open
          data-acc-header
          data-acc-original
          data-acc-default-open
          onClick={onAccordionHeaderClick}
        >
          <div className={styles.stress}>Stress</div>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild53} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContentaccordionDef} data-acc-content>
            <div className={styles.container}>
              <div className={styles.factorValues}>
                <div className={styles.low}>Low</div>
                <img
                  className={styles.arrowChevronRightIcon8}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.goodLowContainer}>
                  <span>Good</span>
                  <span className={styles.highImpact}> | Low Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864-3.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertcheckcirclefill.svg"
          />
        </div>
        <div
          className={styles.frame1707478880Close}
          data-acc-item
          data-acc-header
          onClick={onAccordionHeaderClick}
        >
          <a className={styles.weight10}>Stress</a>
          <div className={styles.frameParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.s}>S</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>M</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>W</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>T</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>F</div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.frameItem} />
              <div className={styles.s}>S</div>
            </div>
          </div>
          <div className={styles.accordionContent} data-acc-content>
            <div className={styles.container}>
              <div className={styles.kgParent}>
                <div className={styles.kg}>85.2 kg</div>
                <img
                  className={styles.arrowChevronRightIcon}
                  loading="lazy"
                  alt=""
                  src="/arrowchevronright.svg"
                />
                <div className={styles.obeseHighContainer}>
                  <span>Obese</span>
                  <span className={styles.highImpact}> | High Impact</span>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.factorListChild}
            alt=""
            src="/rectangle-33864.svg"
          />
          <img
            className={styles.alertOctagonFillIcon}
            loading="lazy"
            alt=""
            src="/alertoctagonfill.svg"
          />
          <div className={styles.accordionContent1} />
          <div className={styles.div} />
        </div>
        <div className={styles.maintainingAHealthy}>
          Maintaining a healthy weight, eating right, exercising regularly,
          sleeping well and managing stress help to improve HbA1c levels.
        </div>
      </div>
    </div>
  );
};

export default Root;
