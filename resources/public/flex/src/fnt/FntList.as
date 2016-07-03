package fnt {

import flash.display.Sprite;
import flash.net.SharedObject;
import flash.net.URLLoader;
import flash.net.URLRequest;
import flash.net.URLRequestMethod;
import flash.text.Font;
import flash.text.FontType;
import flash.text.FontStyle;
import flash.external.ExternalInterface;

import mx.controls.Alert;

public class FntList extends Sprite
{
    public function FntList()
    {
        //ExternalInterface.call('populateFontList',getDeviceFonts());
    }

    public function getDeviceFonts():Array
    {
        var embeddedAndDeviceFonts:Array = Font.enumerateFonts(true);

        var deviceFontNames:Array = [];
        for each (var font:Font in embeddedAndDeviceFonts)
        {
            if (font.fontType == FontType.EMBEDDED
                    || font.fontStyle != FontStyle.REGULAR
            )
                continue;
            deviceFontNames.push(font.fontName);
        }
        deviceFontNames.sort();

        try {
            ExternalInterface.call('populateFontList',deviceFontNames);
            Alert.show("called");
        } catch(e:Error) {
            Alert.show("error: "+e.toString());
        }

        return deviceFontNames;
    }
}
}
