const {
  Text,
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
} = require("../lib/text.js");

// Text Class
describe("Text", () => {
  describe("Instantiation", () => {
    it("should be an instance of Text Class", () => {
      const text = new Text();

      expect(text).toBeInstanceOf(Text);
    });
    it("should have default propertes for userText, selected font, & color", () => {
      const text = new Text();

      expect(text.userText).toBe("");
      expect(text.selectedFont).toBe("");
      expect(text.color).toBe("");
    });
  });

  describe("Set Properties", () => {
    it("should set the text property", () => {
      const text = new Text();
      text.setText("LNT");

      expect(text.userText).toBe("LNT");
    });
    it("should set the font property", () => {
      const text = new Text();
      text.setFont("Cursive");

      expect(text.selectedFont).toBe("Cursive");
    });
    it("should set the color property", () => {
      const text = new Text();
      text.setColor("#2E8B57");

      expect(text.color).toBe("#2E8B57");
    });
  });

  describe("Render", () => {
    it("should throw an error", () => {
      const text = new Text();

      expect(() => text.render()).toThrow(
        "Subclasses must implement the render method"
      );
    });
  });
});

// XSmall Class
describe("XSmall", () => {
  describe("Instantiation", () => {
    it("should be an instant of XSmall Class", () => {
      const xsmall = new XSmall();

      expect(xsmall).toBeInstanceOf(XSmall);
    });
  });
  describe("Render", () => {
    it("should render a xsmall text SVG", () => {
      const xsmall = new XSmall();
      xsmall.setText("ZTT");
      xsmall.setFont("Monospace");
      xsmall.setColor("white");
      let svgTextString = xsmall.render();

      expect(svgTextString).toContain(
        '<text x="125" y="105" font-family="Monospace" font-size="25" fill="white">ZTT</text>'
      );
    });
  });
});

// Small Class
describe("Small", () => {
  describe("Instantiation", () => {
    it("should be an instant of Small Class", () => {
      const small = new Small();

      expect(small).toBeInstanceOf(Small);
    });
  });
  describe("Render", () => {
    it("should render a small text SVG", () => {
      const small = new Small();
      small.setText("OGT");
      small.setFont("Fantasy");
      small.setColor("purple");
      let svgTextString = small.render();

      expect(svgTextString).toContain(
        '<text x="105" y="115" font-family="Fantasy" font-size="50" fill="purple">OGT</text>'
      );
    });
  });
});

// Medium Class
describe("Medium", () => {
  describe("Instantiation", () => {
    it("should be an instant of Medium Class", () => {
      const medium = new Medium();

      expect(medium).toBeInstanceOf(Medium);
    });
  });
  describe("Render", () => {
    it("should render a medium text SVG", () => {
      const medium = new Medium();
      medium.setText("#th");
      medium.setFont("Serif");
      medium.setColor("navy");
      let svgTextString = medium.render();

      expect(svgTextString).toContain(
        '<text x="85" y="125" font-family="Serif" font-size="75" fill="navy">#th</text>'
      );
    });
  });
});

// Large Class
describe("Large", () => {
  describe("Instantiation", () => {
    it("should be an instant of Large Class", () => {
      const large = new Large();

      expect(large).toBeInstanceOf(Large);
    });
  });
  describe("Render", () => {
    it("should render a large text SVG", () => {
      const large = new Large();
      large.setText("M");
      large.setFont("Sans-serif");
      large.setColor("red");
      let svgTextString = large.render();

      expect(svgTextString).toContain(
        '<text x="60" y="135" font-family="Sans-serif" font-size="100" fill="red">M</text>'
      );
    });
  });
});

// Large Class
describe("Large", () => {
  describe("Instantiation", () => {
    it("should be an instant of Large Class", () => {
      const large = new Large();

      expect(large).toBeInstanceOf(Large);
    });
  });
  describe("Render", () => {
    it("should render a large text SVG", () => {
      const large = new Large();
      large.setText("M");
      large.setFont("Sans-serif");
      large.setColor("red");
      let svgTextString = large.render();

      expect(svgTextString).toContain(
        '<text x="60" y="135" font-family="Sans-serif" font-size="100" fill="red">M</text>'
      );
    });
  });
});

// XLarge Class
describe("XLarge", () => {
  describe("Instantiation", () => {
    it("should be an instant of XLarge Class", () => {
      const xLarge = new XLarge();

      expect(xLarge).toBeInstanceOf(XLarge);
    });
  });
  describe("Render", () => {
    it("should render a xlarge text SVG", () => {
      const xLarge = new XLarge();
      xLarge.setText("PA");
      xLarge.setFont("Cursive");
      xLarge.setColor("black");
      let svgTextString = xLarge.render();

      expect(svgTextString).toContain(
        '<text x="40" y="145" font-family="Cursive" font-size="115" fill="black">PA</text>'
      );
    });
  });
});
