package edu.gordon.cs.cps350_2018;

import com.google.appengine.api.urlfetch.URLFetchService;
import com.google.appengine.api.urlfetch.HTTPMethod;
import com.google.appengine.api.urlfetch.HTTPRequest;
import com.google.appengine.api.urlfetch.HTTPResponse;
import com.google.appengine.api.urlfetch.URLFetchServiceFactory;
import static com.google.appengine.api.urlfetch.FetchOptions.Builder.*;
import com.google.appengine.api.utils.SystemProperty;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.InputStreamReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.Properties;

import javax.servlet.annotation.WebServlet;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "ForecastServlet", value = "/forecast/*")
public class ForecastServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    /* Get data from Dark Sky server.
     */
    URL url = new URL("https://api.darksky.net/forecast" +
                      request.getPathInfo());

//    URLFetchServiceFactory factory = new URLFetchService();
    URLFetchService fetcher =
        URLFetchServiceFactory.getURLFetchService();

    /*DBG*/ System.out.println("URL: " + url);

    HTTPResponse darkSkyResponse;
    darkSkyResponse = fetcher.fetch(new HTTPRequest(url, HTTPMethod.GET,
                                                    validateCertificate()));
    int respCode = darkSkyResponse.getResponseCode();

    if (respCode == HttpURLConnection.HTTP_OK) {
        /* Prepare and send response.  */
        /* Pass response code (status) through. */
        response.setStatus(respCode);
        response.setContentType("application/json");

        /* Support CORS so Ionic apps can be tested with "ionic serve".
         * If localhost:8100 isn't broad enough, could replace 2nd
         * argument with "*" because there's no sensitive data here.
         */
        response.addHeader("Access-Control-Allow-Origin",
                           "http://localhost:8100");

        /* Copy response from DarkSky (in) into servlet response (out). */
        ByteArrayInputStream in =
            new ByteArrayInputStream(darkSkyResponse.getContent());
        int length = in.available();

        ServletOutputStream out = response.getOutputStream();

        for (int i = 0; i < length; i++) {
            out.write(in.read());
        }

    } else {
        // TODO: pass Dark Sky error message along
        response.sendError(respCode,
                           "cacheServer got error from api.darksky.net");
    }
  }
}
